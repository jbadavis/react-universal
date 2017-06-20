const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: './Client.js',
  },

  output: {
    path: path.resolve(__dirname, '../dist/public'),
    filename: '[name].bundle.js',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist/public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['es2015', 'react', 'stage-0']
          }
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
      {
        test: /\.(jpg|png|svg)$/,
        use: [{
          loader: 'file-loader?name=/images/[name].[ext]&outputPath=./dist/static/images/'
        }]
      }
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'views/index.html' }]),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules']
  },
};
