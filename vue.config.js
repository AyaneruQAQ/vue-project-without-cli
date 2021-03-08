const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:path.join(__dirname,'src/main.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist/bundle.js')
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            filename:'index.html',
            template:path.join(__dirname,'./public/index.html')
        })
    ],
    devServer:{
        port:9000,
        host:'0.0.0.0',
        overlay:{
            error: true
        },
        hot:true
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
              },
              // 它会应用到普通的 `.css` 文件
              // 以及 `.vue` 文件中的 `<style>` 块
              {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ]
              }
        ]
    }
}