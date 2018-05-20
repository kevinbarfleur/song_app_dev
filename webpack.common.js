const htmlWebPackPlugin = require('html-webpack-plugin')
const cleanWebPackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['node_modules'],
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  plugins: [
    new htmlWebPackPlugin({
      favicon: './src/images/favicon.ico',
      template: 'index.html'
    }),
    new cleanWebPackPlugin(['dist'])
  ]
}
