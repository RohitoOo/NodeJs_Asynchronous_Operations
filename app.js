//Create a new folder within a new folder

const makedir = require('make-dir');
var path = require('path');
var fs = require('fs')

makedir('rohit/bhambhani/noode').then(path => {

  console.log("This is the path name of the folder we just created " + path)
});


// Add text into existing txt file


fs.appendFile('abc.txt', 'This was added directly from the app.js file. ', function (err) {
  if (err) {
    // append failed
  } else {
    // done
  }
})





//Read a text file and display the content of the text file in the console.


var path = require('path');
var readStream = fs.createReadStream(path.join(__dirname, '../node') + '/abc.txt', 'utf8');
let data = ''
readStream.on('data', function(chunk) {
    data += chunk;
}).on('end', function() {
    console.log(data);
});

// Read the file names inside current folder

var fileNameWithExt = path.basename(__filename);
var fileName = path.parse(__filename).name
var extensionNAme = path.parse(__filename).ext
console.log("File name with the extension = " + fileNameWithExt)
console.log("File name without extension = " + fileName)



// Delete Directory

var rimraf = require('rimraf');
rimraf('Users/absolue/path/name', function () { console.log('Deleted'); });
