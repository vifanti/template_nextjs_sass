const withImages = require('next-images');
const path = require('path')

module.exports = withImages({
  esModule: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  }
});

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
}
