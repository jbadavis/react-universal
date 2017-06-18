module.exports = {
  output: {
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.(sass|scss|css)$/,
        use: [{
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
            module: true,
            localIdentName: '[name]__[local]',
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
          loader: 'file-loader?name=/images/[name].[ext]'
        }]
      }
    ],
  },
};
