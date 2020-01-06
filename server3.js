var http = require('http');
var fs = require("fs");
http.createServer(function (req, res) {
	
	
	if(req.url === "/"){
		console.log("Requested URL is url" +req.url);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<b>Hey there!</b><br /><br />This is the default response. Requested URL is: ' + req.url);
	}else if(req.url === "/abc"){
		console.log("Requested URL is url" +req.url);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('apple');
	}else if(req.url === "/123"){
	sendFileContent(res, "web.html", "text/html");
		}else if(req.url === "/1234"){
	sendFileContent(res, "web.html", "text/html");
	}
 
  
  
}).listen(9000);

function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			console.log(err);
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}