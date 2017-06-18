const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './Client.js',
  },

  output: {
    path: path.resolve(__dirname, './dist/public'),
    filename: '[name].bundle.js',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist/public'),
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
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?localIdentName=[name]__[local]',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [{
          loader: 'file-loader?name=/images/[name].[ext]'
        }]
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.bundle.css',
      allChunks: true
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  },
};
