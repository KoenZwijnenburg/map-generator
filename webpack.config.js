const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: false,
  devServer: {
    compress: true, 
    port: 2300
  },
  plugins: [
    new CopyWebpackPlugin([
        { from: './assets', to: 'assets' }
    ]),
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$', // embed all javascript and css inline
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
  ]
};