const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './Client.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }],
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [{
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
            module: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
            importLoaders: 1,
          }
        },
        {
          loader: "sass-loader"
        }]
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  },
};
