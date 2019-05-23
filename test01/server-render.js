var http = require('http');//导入内置的http模块
http.createServer(function (request,response) {
    //在响应头中写入
    //状态码200
    //内容类型：'content-type':'text/plain'
    response.writeHead(200,{'content-type':'text/plain'});
    //服务端渲染
    //循环向页面输出helloworld，观察发现源码只有打印的helloword，说明js在服务端已经渲染好了
    for (var i =0 ; i <=10 ; i++) {
        response.write('Hello World\n');
    }
    response.end('');
    // 终端打印如下信息
    console.log('Server running at http://127.0.0.1:8888/');
}).listen(8888);