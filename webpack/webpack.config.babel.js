const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  output: {
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
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
    new ExtractTextPlugin({ disable: true }),
  ],
};
