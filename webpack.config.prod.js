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
            'css-loader?localIdentName=[name]__[local]--[hash:base64:5]',
            'sass-loader'
          ]
        })
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.bundle.css',
      allChunks: true
    }),
    new CopyWebpackPlugin([{ from : 'imgs', to: 'imgs' }])
  ],
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  },
};
