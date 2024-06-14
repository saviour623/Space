var http = require('http');
var fs = require('fs');
const port = 9495;
const host = '0.0.0.0'

var index_html = fs.readFileSync('./index.html');
var server = http.createServer((req, res) => {
    console.log("[requesting]" + req.url);
    res.writeHead(200, {'content-type':'text/html'});
    res.write(index_html);

    res.end();
});
server.listen(port, host);
server.on('listening', function() {
    console.log('[server http://%s:%d initiated] listening for request', server.address().address, server.address().port);
});
