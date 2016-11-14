<h1 style="text-align:center">Vue + Webpack 配置</h1>

### 处理 .vue 文件

安装 vue-loader

```bash
npm install vue-loader --save-dev
```

配置 webpack.config.js

```js
module.exports = {
  // 这里省略一万步
  module: {
    loaders: [
      // 把所有用 es6 写的 .js 文件用 babel-loader 转成 es5
      // 具体配置参考 babel 官方的教程
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      // 所有 .vue 文件用 vue-loader 处理
      { test: /\.vue$/, loader: "vue" }
    ]
  }
}
```

### HTML 文件处理

在根目录下面新建一个```index.html```文件，然后使用 html-webpack-plugin 把它打包到 dist 文件夹里

安装 html-webpack-plugin

```bash
npm install html-webpack-plugin --save-dev
```

配置 webpack.config.js

```js
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 这里省略一万步
  plugins: [
    new HtmlWebpackPlugin({
      // 输出的位置
      filename: 'index.html',
      // 使用的模板文件
      template: 'index.html'
    })
  ]
}
```

### 代理后端服务

```js
module.exports = {
  // 这里省略一万步
  devServer: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
}
```

### Hot reload

配置 package.json，一定要带上 ```--hot```

```json
{
  "scripts": {
    "dev": "webpack-dev-server --inline --hot"
  }
}
```

<h1 style="text-align:center">nginx 配置</h1>
