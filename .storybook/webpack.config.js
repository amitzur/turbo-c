const path = require('path');

const include = path.resolve(__dirname, '../');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"],
        include
      },
      {
        test: /\.svg$/,
        loaders: ['url-loader'],
        include
      },
      {
        test: /\.ttf$/,
        loaders: ['file-loader'],
        include
      }
    ]
  }
};