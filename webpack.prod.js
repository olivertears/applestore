const HTMLWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = require('./webpack.config');

module.exports = {
  ...config,
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: false
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new BundleAnalyzerPlugin()
  ]
};
