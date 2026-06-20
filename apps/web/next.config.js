/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@devhub/ui"],
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"],
  },
};
module.exports = nextConfig;
