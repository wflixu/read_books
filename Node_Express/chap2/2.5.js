// 2.5.1
// var http= require('http');
// http.createServer(function (req,res) {
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.end('hello world!');
// }).listen(3300);
// console.log('Server started on localhost:3300;press');

// 2.5.2
// var http= require('http');
// http.createServer(function (req,res) {
//     var path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();
//     switch(path){
//         case '':
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.end('homepage');
//         break;
//         case '/about':
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.end('about');
//         break;
//         default:
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.end('not found');
//     }

// }).listen(3300);
// console.log('Server started on localhost:3300;press');


// 2.5.4

var http = require('http');
var fs = require('fs');
function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) { responseCode = 200 }

    fs.readFile(__dirname + path, function (err, data) {
        console.log(__dirname);
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('500  -Internal Error');
        } else {
            res.writeHead(responseCode, { 'Content-Type': contentType });
            res.end(data);
        }
    })

}

http.createServer(function (req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/img/logo.png':
            serveStaticFile(res, '/public/img/logo.png', 'image/png');
            break;
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);

    }

}).listen(3300);
console.log('Server started on localhost:3300;press');
