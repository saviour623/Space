var http = require('http');
var fs = require('fs');
const port = process.env.PORT;
const host = '0.0.0.0'

var index_html = fs.readFileSync('./html/login.html');
var index_css = fs.readFileSync('./css/login.css');
var index_jq = fs.readFileSync('./js/jquery/jquery-3.7.1.min.js');
var server = http.createServer((req, res) => {
    console.log("[requesting]: " + req.url);
    if (req.url == '/') {
	res.writeHead(200, {'content-type':'text/html'});
	res.write(index_html);
    } else if (req.url == '/login.css') {
	res.writeHead(200, {'content-type':'text/css'});
	res.write(index_css);
    } else if (req.url == '/js/jquery/jquery-3.7.1.min.js'){
	res.writeHead(200, {'content-type':'script/javaScript'});
        res.write(index_jq);
    }
    res.end();
});
server.listen(port, host);
server.on('listening', function() {
    console.log('[server http://%s:%d initiated] listening for request', server.address().address, server.address().port);
});
