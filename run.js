const http = require('http');
const port = 3000;
const fs = require('fs');
const server = http.createServer((req, res) => {
    server.listen(port, function(err) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile('index.html', function(error, data){
	    if (error){res.writeHead(404);}
	    else {res.write(data)}
	});
	if (err) {
	    console.log("something went wrong");
	}
	else {
	    console.log("server is listening to port" + port);
	}
    });
});
