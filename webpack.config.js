var webpack = require('webpack');
var path = require('path');
var DIPlugin = require('./plugins/DIPlugin');
// var dependency = 

module.exports = {
  entry: {
    'main': __dirname + '/js/main.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: './js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js' ],
    modules: [
    path.resolve(__dirname + '/js'),
    path.resolve(__dirname + '/node_modules')
  ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new DIPlugin({ dependency: 'aaaa' })
  ]
};
