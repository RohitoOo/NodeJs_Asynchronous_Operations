const http = require('http')
const fs = require('fs')


var server = http.createServer( (req,res) => {
console.log("Request was made to : " , req.url)

if( req.url == "/website" ) {

  res.writeHead(200, {'Content-type' : 'text/html'})
  var myReadStream = fs.createReadStream(__dirname + "/index.html" , "utf8" )
  myReadStream.pipe(res);

} else {
  res.writeHead(200, {'Content-type' : 'text/plain'})

  res.end("Home Page")
}

})

server.listen(3000, 'localhost')

// local host = 127.0.0.1
