var http = require('http');

var static_contents = require('./modules/static.js');

server = http.createServer(function (request, response){
	  static_contents(request, response);
});

server.listen(8000);
console.log("Running in localhost at port 8000");