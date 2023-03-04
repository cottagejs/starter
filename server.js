
var http = require('http');
var fs = require('fs');
var url = require('url');
 
 
// Create a local development server
http.createServer( function (request, response) {  
   // Parsing the request
   var pathname = url.parse(request.url).pathname;
   console.log('Start to create the local server');
   // Get the file from the filesstem
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP : 404 : NOT FOUND
         // Content Type: text/html
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else{             
         // HTTP : 200 : OK
         // Content Type: text/html
         response.writeHead(200, {'Content-Type': 'text/html'});    
         
         // Response the file
         response.write(data.toString());        
      }
      //  Send the data
      response.end();
   });   
}).listen(8080);
 
console.log('The server already has starter');

console.log('The server has running at http://127.0.0.1:8080/');
