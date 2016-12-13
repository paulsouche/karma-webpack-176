module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.ts'],
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'babel-loader?presets[]=es2015,presets[]=stage-0!ts-loader',
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader?presets[]=es2015,presets[]=stage-0',
      },
    ],
  },
};