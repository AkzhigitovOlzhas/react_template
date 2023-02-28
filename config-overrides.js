const {
  alias
} = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@api': 'src/api',
    '@core': 'src/core',
    '@utils': 'src/utils',
    '@hooks': 'src/hooks',
    '@pages': 'src/pages',
    '@config': 'src/config',
    '@routes': 'src/routes',
    '@styles': 'src/styles',
    '@constants': 'src/constants',
    '@components': 'src/components',
  })(config);

  return config;
};