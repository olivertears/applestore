const HTMLWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config');

module.exports = {
  ...config,
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
