var http = require('http');
var fs = require('fs');
const port = process.env.PORT;
const host = '0.0.0.0'

var index_html = fs.readFileSync('./login.html');
var index_css = fs.readFileSync('./login.css');
var server = http.createServer((req, res) => {
    console.log("[requesting]: " + req.url);
    if (req.url == '/') {
	res.writeHead(200, {'content-type':'text/html'});
	res.write(index_html);
    } else if (req.url == '/login.css') {
	res.writeHead(200, {'content-type':'text/css'});
	res.write(index_css);
    }
    res.end();
});
server.listen(port, host);
server.on('listening', function() {
    console.log('[server http://%s:%d initiated] listening for request', server.address().address, server.address().port);
});
