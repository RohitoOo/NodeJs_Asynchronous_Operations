const http = require('http')
const fs = require('fs')
const express = require('express')
const path = require('path')
const app = express();


app.get('/' , (req,res) => {
  console.log(req.query)
  res.send('Hello from Express')
})

app.use(express.static(__dirname + '/public'));

app.set('view engine' , 'ejs')

app.get('/website' , (req,res) => {
  res.sendFile(path.join(__dirname + '/index.html') )
})

// http://localhost:3000/profile/Rohito

app.get('/profile/:name' , (req,res) => {
  res.render('profile' , { name: req.params.name })
})

app.listen(3000, () => {
  console.log("We are Live on Port 3000")
})



// HTTP Server ( w/o Express Framework )


// var server = http.createServer( (req,res) => {
// console.log("Request was made to : " , req.url)
//
// if( req.url == "/website" ) {
//
//   res.writeHead(200, {'Content-type' : 'text/html'})
//   var myReadStream = fs.createReadStream(__dirname + "/index.html" , "utf8" )
//   myReadStream.pipe(res);
//
// } else {
//   res.writeHead(200, {'Content-type' : 'text/plain'})
//
//   res.end("Home Page")
// }
//
// })
//
// server.listen(3000, 'localhost')

// local host = 127.0.0.1
