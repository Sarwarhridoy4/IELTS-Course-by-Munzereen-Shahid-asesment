import type { NextConfig } from "next";

/**
 * Next.js configuration object specifying allowed remote image sources.
 *
 * @remarks
 * The `images.remotePatterns` property defines an array of remote image patterns
 * that Next.js is permitted to optimize and serve. Each pattern specifies the protocol,
 * hostname, port, and pathname for allowed image sources.
 *
 * @property images.remotePatterns
 * - `protocol`: The protocol to use (e.g., "https").
 * - `hostname`: The domain name of the remote image source.
 * - `port`: The port to use (empty string for default HTTPS port 443).
 * - `pathname`: The path pattern to match ("/**" allows all paths).
 *
 * @example
 * // Allows images from via.placeholder.com, img.youtube.com, and cdn.10minuteschool.com
 * // over HTTPS, on any path.
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "", // Leave empty for default HTTPS port (443)
        pathname: "/**", // Allow all paths under the domain
      },
      {
        protocol: "https",
        hostname: "cdn.10minuteschool.com",
        port: "", 
        pathname: "/**", 
      },
      {
        protocol: "https",
        hostname: "s3.ap-southeast-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
