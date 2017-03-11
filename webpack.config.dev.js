var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({ filename: './styles/[name].css', disable: false, allChunks: true }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
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
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff",
                include: path.join(__dirname, 'node_modules')
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader",
                include: path.join(__dirname, 'node_modules')
            },

    // CSS
    {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: path.join(__dirname, 'client')
    },
    {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ],
        include: path.join(__dirname, 'node_modules')
      }
    ]
  }
};
