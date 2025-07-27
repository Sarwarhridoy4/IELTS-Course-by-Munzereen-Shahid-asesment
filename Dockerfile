# Use official Node.js LTS image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock* package-lock.json* ./
RUN yarn install --frozen-lockfile || npm install

# Copy project files
COPY . .

# Build the Next.js app
RUN yarn build || npm run build

# --- Production image ---
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Only copy necessary files for production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Start the app
CMD ["node_modules/.bin/next", "start"]
