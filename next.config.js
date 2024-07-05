const config = require("./src/config/config.json");
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  basePath: config.base_path !== "/cn" ? config.base_path : "",
  trailingSlash: config.site.trailing_slash,
  i18n
};

module.exports = nextConfig;
