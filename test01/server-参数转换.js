var http = require('http');//导入内置的http模块
var url = require('url');//导入url模块
//创建服务器
http.createServer(function (request, response) {
    //request.url获取请求的url
    //url.parse将字符串转换为json对象
    //query 获取查询参数
    var params = url.parse(request.url).query;
    response.write("name:" + params.name);
    response.write("\n");
    response.end();
})
    .listen(8888);
console.log('Server running at http://127.0.0.1:8888/');