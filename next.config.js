const config = require("./src/config/config.json");
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  basePath: config.base_path !== "/" ? config.base_path : "",
  trailingSlash: config.site.trailing_slash,
  i18n,
  trailingSlash: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/cn',
  //       destination: '/cn/',
  //     },
  //     {
  //       source: '/ja',
  //       destination: '/ja/',
  //     },
  //   ]
  // },
  async rewrites() {
    // return [
    //   {
    //     source: '/:lang(cn|ja)/:path*',
    //     destination: '/:lang/:path*',
    //   },
    // ]
    return [
      {
        source: '/',
        destination: '/default',
      },
    ];
  },
};

module.exports = nextConfig;
