import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cf.bstatic.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "r1imghtlak.mmtcdn.com" },
      { protocol: "https", hostname: "images.jdmagicbox.com" },
      { protocol: "https", hostname: "gos3.ibcdn.com" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;
