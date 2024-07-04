const config = require("./src/config/config.json");
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: config.base_path !== "/" ? config.base_path : "",
  trailingSlash: config.site.trailing_slash,
  i18n,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/cn',
        destination: '/cn/',
      },
      {
        source: '/ja',
        destination: '/ja/',
      },
    ]
  },
};

module.exports = nextConfig;
