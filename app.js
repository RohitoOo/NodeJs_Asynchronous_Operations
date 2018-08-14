//Create a new folder within a new folder

const makedir = require('make-dir');
var path = require('path');
var fs = require('fs')

makedir('noode/rohit/bhambhani').then(path => {
  console.log("This is the path name of the folder we just created " + path)
});


// Add text into existing txt file

// Asynchronous ( fs.readFile ) VS Synchronous ( fs.readFileSync )

fs.appendFile('abc.txt', 'This was added directly from the app.js file. ', function (err) {
  if (err) {
    // append failed
  } else {
    // done
  }
})

//Read a text file and display the content of the text file in the console.

var path = require('path');
var readStream = fs.createReadStream(path.join(__dirname) + '/abc.txt', 'utf8');
let data = ''

readStream.on('data', function(chunk) {
    data += chunk;
}).on('end', function() {
    console.log("Read By readStream : " ,  data);
});

// Read the file names inside current folder

var fileNameWithExt = path.basename(__filename);
var fileName = path.parse(__filename).name
var extensionNAme = path.parse(__filename).ext
console.log("File name with the extension = " + fileNameWithExt)
console.log("File name without extension = " + fileName)

// Delete Directory

var rimraf = require('rimraf');
rimraf(__dirname + '/deleteMe.txt', function () { console.log( __filename + "/deleteMe.txt" , ' has Been Deleted'); });


// Node Basics

var time = 0

// setInterval && setTimeout

setTimeout( (time)=> {
  time = time + 2
  console.log( '2 seconds have passed')
}, 2000)


// Global Objects

// https://nodejs.org/api/globals.html


console.log( "Current File Name : " , path.basename(__filename) )
console.log( "Current File Path : " , __filename )
console.log( "Current Directory Path : " , __dirname)


// function expressions

function callFunction(anyFunction) {
// call the function passed as an argument
anyFunction()
}

var sayHello = function(name = "Bhambhani!"){
  console.log("Hello " + name)
}

callFunction(sayHello) ;


var adder = function(a,b) {
  console.log("Sum = " + ( a + b )   )
}

// // require && exports


module.exports = {
  sayHello : sayHello,
  adder : adder
}




// Node js Core Module

var events = require('events')

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent' , function(msg) {

  console.log(msg)
})

myEmitter.emit('someEvent' , "The Event Has Been Emitted")
