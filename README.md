### 作用
移动端开发，重置html文档的rem为屏幕的宽度除以7.5，即设计稿宽度为750px时,某字体大小为36px，对应的css写法为0.36rem;
### 使用方法
```bash
npm i setrem --save
```

### 配合htmlWebpackPlugin使用

```javascript
//webpack.config.js
const setrem = require('setrem')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = {
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            setrem: setrem
        })
    ]
}
```
### 利用htmlWebpackPlugin插入自定义内容
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>setrem</title>
    <%= htmlWebpackPlugin.options.setrem.js %>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```