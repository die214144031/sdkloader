const path = require('path');
// const webpack = require('webpack');

const curDir = __dirname;
module.exports = {
  entry: {
    loader: './src/loader.js',
    sdkloader: './src/sdkloader.js'
  },
  output: {
    path: path.join(curDir, 'lib'),
    filename: '[name].js',
    crossOriginLoading: 'anonymous',
    sourceMapFilename: '[file].map',
    pathinfo: true
  },
  module: {
    rules: [{
      test: /src\/\w+\.js|jsx$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      enforce: 'pre' // webpack2写法
    },
    {
      test: /src\/\w+\.js|jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  devtool: 'eval-source-map',
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
};
