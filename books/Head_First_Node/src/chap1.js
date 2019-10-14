// $.post('url',{},function(data){
//   console.log('受到响应');
// });
// console.log('发起Ajax结束！');


module.exports=function(){
    var fs = require('fs');
    fs.readFile('./package.json',function(err,file){
        console.log('读取文件完成');
    })
    console.log('读取文件');
    
    // 1.4.2
    var http = require('http');
    var querystring = require('querystring');
    http.createServer(function(req,res){
         var postData='';
         req.setEncoding('utf8');
         req.on('data',function(trunk){
             postData+=trunk;
         });
         req.on('end',function(){
             res.end('hello');
         })
    }).listen(8080);
    console.log('服务器启动成功');
}
