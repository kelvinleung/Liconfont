const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/main",
  output: {
    path: "./dist",
    filename: "./js/bundle.js",
    publicPath: "/dist/"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.vue$/, loader: "vue" },
      { test: /\.ttf$/, loader: "file" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      minify: false
    })
  ],
  devServer: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
}
