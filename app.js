const http = require("http");

const server = http.createServer(function(req, res) {


	res.write("Being on the way to become a full Snak engineere! ");
	res.end();

});

server.listen(3000);

console.log("Server Listing on the 3000 port!");

