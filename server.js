const http = require('http')

var server = http.createServer( (req,res) => {
console.log("Request was made to : " , req.url)
res.writeHead(200, {'Content-type' : 'text/plain'})
res.end("Server responsed!")
})

server.listen(3000, 'localhost')

// local host = 127.0.0.1
