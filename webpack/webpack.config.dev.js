const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');

module.exports = merge(base, {
  devServer: {
    contentBase: path.resolve(__dirname, '../dist/public'),
    historyApiFallback: true
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
            presets: ['env', 'react', 'react-hmre']
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
    new webpack.NamedModulesPlugin(),
    new NunjucksWebpackPlugin({
      templates: [{
        from: 'src/views/index.dev.njk',
        to: 'index.html'
      }]
    })
  ]
});
