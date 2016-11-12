module.exports = {
  entry: "./src/main.js",
  output: {
    path: "./dist/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.vue$/, loader: "vue" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
}
