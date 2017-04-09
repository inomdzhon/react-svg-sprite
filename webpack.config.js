const path = require('path');

module.exports = {
  devtool: 'eval',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  entry: {
    sprite: './src/sprite',
    inline: './src/inline',
  },
  output: {
    path: path.join(__dirname, '/public_html'),
    filename: 'app.[name].js',
    publicPath: '/public_html/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
}
