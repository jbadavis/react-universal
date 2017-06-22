const path = require('path');
const webpack = require('webpack');

const base = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: './Client.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist/public'),
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules']
  },
};

module.exports = base;
