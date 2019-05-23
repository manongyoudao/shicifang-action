var path = require("path"); //导入path模块
//将模块暴露出去
module.exports= {
    //读取当前目录下src文件夹中的main.js（入口文件）内容，把对应的js文件打包
    entry: './src/main.js',
    //打包后的文件放入当前目录的dist文件夹下
    output: {
        path: path.resolve(__dirname, './dist'),
        //打包后的js文件名为bundle.js
        filename: 'bundle.js'
    },
    //为了让js可以认识别的模块比如，css等，需要使用loader进行模块和资源的转换
    module: {
        //定义规则
        rules: [
            {
            //判断条件
            test:/\.css$/,
            //使用什么loader来进行转换
            //css-loader 是将 css 装载到 javascript；
            // style-loader 是让 javascript 认识css
            use: ['style-loader', 'css-loader']
        }
        ]
    }
};