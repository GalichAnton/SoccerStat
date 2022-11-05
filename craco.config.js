const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
  // ...
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@assets': resolvePath('./src/assets'),
      '@services': resolvePath('./src/services'),
      "@store": resolvePath('./src/store'),
      "@helpers": resolvePath('./src/helpers'),
      "@hooks": resolvePath('./src/hooks'),
      "@pages": resolvePath('./src/pages'),
      "@interfaces": resolvePath('./src/interfaces'),
      "@http": resolvePath('./src/http'),
    }
  },
}

