const config = require("./src/config/config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_PUBLIC_MAIL_USER: process.env.NEXT_PUBLIC_MAIL_USER,
    NEXT_PUBLIC_MAIL_PASS: process.env.NEXT_PUBLIC_MAIL_PASS,
  },
  reactStrictMode: true,
  basePath: config.base_path !== "/" ? config.base_path : "",
  trailingSlash: config.site.trailing_slash,
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
