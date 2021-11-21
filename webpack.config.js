const path = require('path');

module.exports = {
  entry: './public/script.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'webpackPasta'),
  },
};