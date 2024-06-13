const http = require('http')
const port = 3000
const server = http.createServer((req, res) => {
    server.listen(port, function(err) {
	if (err) {
	    console.log("something went wrong");
	}
	else {
	    console.log("server is listening to port" + port);
	}
    }
}
