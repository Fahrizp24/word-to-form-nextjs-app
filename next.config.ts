import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // Hanya gunakan rewrite ke localhost:8000 saat development
    if (process.env.NODE_ENV === "production") return [];
    
    return [
      {
        source: "/api/:path*",
        destination: "http://127.0.0.1:8000/api/:path*", 
      },
    ];
  },
};

export default nextConfig;