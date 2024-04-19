/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
// CORS 에러 해결
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://assignment-be-phi.vercel.app/api/:path*",
      },
      {
        source: "/user/api/:path*",
        destination: "https://assignment-be-phi.vercel.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;
