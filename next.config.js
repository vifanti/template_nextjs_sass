const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  }
});
