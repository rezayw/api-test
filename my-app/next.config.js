/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
    ],
  },
  experimental: {
    allowedDevOrigins: ['http://127.0.2.2:3000'], // adjust if you're using a different dev IP/port
  },
};

export default nextConfig;
