var http = require('http')

http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('hellow node.js');
}).listen(8088);

console.log('Server running on http://localhost:8088');