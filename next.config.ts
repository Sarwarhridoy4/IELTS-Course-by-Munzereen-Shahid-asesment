import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "", // Leave empty for default HTTPS port (443)
        pathname: "/**", // Allow all paths under the domain
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "", // Leave empty for default HTTPS port (443)
        pathname: "/**", // Allow all paths under the domain
      },
    ],
  },
};

export default nextConfig;
