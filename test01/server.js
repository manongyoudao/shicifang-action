var http = require('http');//导入内置的http模块
http.createServer(function (request,response) {
    //在响应头中写入
    //状态码200
    //内容类型：'content-type':'text/plain'
    response.writeHead(200,{'content-type':'text/plain'});
    //结束响应
    response.end("// 发送响应数据 \"Hello World\"")
    // 终端打印如下信息
    console.log('Server running at http://127.0.0.1:8888/');
}).listen(8888);