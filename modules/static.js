var fs = require("fs");

module.exports = function(request, response){
	response.writeHead(200, {'Content-type': 'text/html'});
	serveFile(request.url, response); 
}

function getFileExtension(filename){
	var result = filename.split(".");
	return result.length > 1 ? result.pop() : "";
}

function serveFile(url, response){
	if(getFileExtension(url) === "jpg")
		readFile('images'+url, response);
	else if(getFileExtension(url) === "html" || getFileExtension(url) === ""){
		if(url === '/') 
			readFile('views/index.html', response);
		else if(url ==='/cars/new') 
			console.log("Processing form");
		else
			readFile('views'+url+'.html', response);
	} else if(getFileExtension(url) === "css")
		readFile('styles'+url, response);
	  else 
    	response.end('File not found!!!');
}

function readFile(file, response){
	if(getFileExtension(file) === "html")
		fs.readFile(file, 'utf8', function (errors, contents){
	      response.write(contents);
	      response.end();		});
	else
		fs.readFile(file, function (errors, contents){
	      response.write(contents);
	      response.end();		});
}