var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/feelthetweet'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'client')
    },
    {
      test: /\.css$/,
      loaders: ["style-loader!css-loader"],
      include: path.join(__dirname, 'client')
    },

    // CSS
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"],
      include: path.join(__dirname, 'client')
    }
    ]
  }
};
