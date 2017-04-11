var webpack = require('webpack');
var path = require('path');
var DI = require('./js/DI/index');
var dependencies = require('./dependency');
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
    // root: [ path.resolve('./js') ], // webpack 1
    modules: [
      path.resolve(__dirname + '/js'), // webpack 2
      path.resolve(__dirname + '/node_modules')
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.DI_CONTAINER': JSON.stringify(DI.initialize(dependencies)),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
