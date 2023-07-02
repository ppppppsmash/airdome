const config = require("./src/config/config.json");

/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.ts'
);

// const nextConfig = {
//   reactStrictMode: true,
//   basePath: config.base_path !== "/" ? config.base_path : "",
//   trailingSlash: config.site.trailing_slash,
//   withNextIntl
// };

// module.exports = nextConfig;
module.exports = withNextIntl({
  reactStrictMode: true,
  basePath: config.base_path !== "/" ? config.base_path : "",
  trailingSlash: config.site.trailing_slash,
  withNextIntl
});
