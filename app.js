var http = require('http');
var fs = require('fs');
const port = 8080;

var index_html = fs.readFileSync('./index.html');
var server = http.createServer((req, res) => {
    console.log("[requesting]" + req.url);
    res.writeHead(200, {'content':'text/html'});
    res.write(index_html);

    res.end();
});
server.listen(port, () => {
    console.log("[server initiated] listening for request");
});
