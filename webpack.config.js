var path = require("path");
var webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

var PATHS = {
  entryPoint: resolve('src/index.ts'),
  examples: resolve('examples/examples.ts'),
  bundles: resolve('umd'),
}

var config = {
  entry: {
    'simpleCanvas': [PATHS.entryPoint],
    'simpleCanvas.min': [PATHS.entryPoint],
    'examples': [PATHS.examples]
  },
  output: {
    path: PATHS.bundles,
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'SimpleCanvas',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
      include: /\.min\.js$/,
      sourceMap: true
    })
  ],
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
      exclude: /node_modules/,
      query: {
        declaration: false,
      }
    }]
  }
}

module.exports = config;