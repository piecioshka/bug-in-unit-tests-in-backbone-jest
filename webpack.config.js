const path = require('path');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: path.join(__dirname, './src/scripts/main.js'),

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    clean: true,
  },

  stats: 'errors-only',

  plugins: [
    new SimpleProgressWebpackPlugin({
      // format: 'minimal'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
};
