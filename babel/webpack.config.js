module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader?presets[]=es2015,presets[]=stage-0',
      },
    ],
  },
};