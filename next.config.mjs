/** @type {import('next').NextConfig} */
// const nextConfig = {};
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "az", "ru"],
    defaultLocale: "en",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
};

export default nextConfig;
