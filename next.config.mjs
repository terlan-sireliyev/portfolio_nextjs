/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "az", "ru"],
    defaultLocale: "en",
  },
  nify: true,
};

export default nextConfig;
