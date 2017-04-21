const path = require('path');
const SvgStorePlugin = require('external-svg-sprite-loader/lib/SvgStorePlugin');

module.exports = {
  devtool: 'eval',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  entry: {
    app: './src/index',
  },
  output: {
    path: path.join(__dirname, '/public_html'),
    filename: '[name].js',
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
      {
        test: /\.svg$/,
        loaders: ['external-svg-sprite-loader?iconName=[name]'],
      },
    ],
  },
  plugins: [
    new SvgStorePlugin(),
  ],
}
