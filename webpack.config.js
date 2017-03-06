const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
var path = require('path');

const config = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // module: {
  //   rules: [
  //     {test: /\.(js|jsx)$/, use: 'babel-loader'}
  //   ]
  // },
   plugins: [
    new webpack.BannerPlugin('This file is created by mutouren')
    // new webpack.optimize.UglifyJsPlugin(),
    // new HtmlWebpackPlugin({template: './index.html'})
  ]
}
module.exports = config;