Sure! Here's a professional and complete `README.md` for your project:

---

# IELTS Course by Munzereen Shahid - Assessment

This project is a **Frontend Engineer (Level 1)** assessment task designed to replicate the official IELTS course product page hosted by [10 Minute School](https://10minuteschool.com/product/ielts-course/). The implementation uses **React**, **Next.js**, **TypeScript**, and **TailwindCSS** to deliver a modern, scalable, and performant product page.

## 🔗 Live Link

👉 [Deployed Preview (Optional if hosted)](https://your-deployment-link.com)

## 📦 Features

- ✅ Product title and HTML description rendering
- ✅ Course instructor details
- ✅ Product trailer (YouTube video)
- ✅ Course layout and structure (features)
- ✅ Learning outcomes (pointers)
- ✅ Exclusive course features
- ✅ Course details (about)
- ✅ Interactive checklist
- ✅ CTA text display
- ✅ Default price display (৳1000)
- ✅ SEO meta support from API
- ✅ Localization (`en` and `bn`)
- ✅ **Server-Side Rendering (SSR)** using Next.js
- ✅ **Incremental Static Regeneration (ISR)**
- ✅ Reusable components
- ✅ Type-safe with **TypeScript**
- ✅ Clean TailwindCSS-based responsive UI
- ✅ Docker support (optional)

---

## 🚀 Technologies Used

- **React (v18)**
- **Next.js (v15+/App Router)**
- **TypeScript**
- **TailwindCSS**
- **Headless UI / ShadCN / Lucide Icons**
- **Axios / Fetch**
- **Youtube Embedded Player** for video embed
- **Next SEO** for SEO management (optional)

---

## 🔧 Getting Started

### Prerequisites

- Node.js >= 18
- Yarn / npm
- Docker (optional)

### Installation

```bash
git clone https://github.com/Sarwarhridoy4/IELTS-Course-by-Munzereen-Shahid-asesment.git
cd IELTS-Course-by-Munzereen-Shahid-asesment
yarn install
# or
npm install
```

### Running Locally

```bash
# Development mode
yarn dev
# or
npm run dev
```

### Environment Variables

No `.env` file is required. All API usage is public with static endpoint:

```
GET https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en
Headers:
  X-TENMS-SOURCE-PLATFORM: web
```

---

### 🐳 Docker Setup (Optional)

You can build and run the project using Docker to ensure it works in a containerized environment.

#### 📄 Step 1: Create a `Dockerfile`

Save the following file at the **root** of your project and name it exactly:

```
Dockerfile
```

<details>
<summary>Click to expand Dockerfile contents</summary>

```Dockerfile
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
```

</details>

---

#### ⚙️ Step 2: Build the Docker Image

From your terminal in the project root:

```bash
docker build -t ielts-course .
```

---

#### ▶️ Step 3: Run the Docker Container

```bash
docker run -p 3000:3000 ielts-course
```

Now your app will be available at:

```
http://localhost:3000
```

---

#### 📦 Optional: Add `.dockerignore`

To avoid copying unnecessary files into the Docker image, you can create a `.dockerignore` file at the root:

```bash
node_modules
.next
Dockerfile
.dockerignore
.git
.gitignore
README.md
```

---


## 📁 Project Structure

```
├── app/
│   └── product/ielts-course/   # Dynamic Product Page
├── components/                 # Reusable UI components
├── interface/                  # TypeScript interfaces
├── public/                     # Static assets
├── styles/                     # Global styles if needed
├── Dockerfile                  # Docker support
└── README.md
```

---

## 🌐 API Reference

**Base URL**
`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course`

**Query Params**

- `lang=en` or `lang=bn`

**Headers**

- `X-TENMS-SOURCE-PLATFORM: web`
- `Accept: application/json`

---

## 🧠 Learnings & Highlights

- Implemented **SSR and ISR** using Next.js App Router.
- Strong **type-safety** with TypeScript interfaces.
- Used **modular UI design**, making components easily reusable.
- SEO support via dynamic meta rendering.
- Fully responsive and mobile-friendly UI with TailwindCSS.
- Dynamically parsed and rendered HTML safely.

---

## 📬 Contact

Feel free to connect with me:

- 💼 [LinkedIn](https://www.linkedin.com/in/sarwarhridoy)
- 📧 [sarwarhridoy@gmail.com](mailto:sarwarhridoy@gmail.com)
- 🐙 [GitHub](https://github.com/Sarwarhridoy4)

---

## ✅ Submission Checklist

- [x] Used React, NextJS, TypeScript, and TailwindCSS
- [x] Fetched data from 10 Minute School API
- [x] Displayed all required sections as per wireframe
- [x] Implemented SSR and optional ISR
- [x] SEO-ready metadata rendering
- [x] GitHub repository public and well-structured
- [x] Dockerfile included (optional)

---

**Thank you!** 🙌

---
