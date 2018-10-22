'use strict';

const fs = require('fs');


//connecting the reader.js to the library
let path1 = `${__dirname}/../data/eenie.txt`;
let path2 = `${__dirname}/../data/meenie.txt`;
let path3 = `${__dirname}/../data/moe.txt`;

 //creating an array of the files
 //let pathArray = [path1, path2, path3];

// Asynchronously reading a file.


//export a single function
module.exports = (pathArray, doneHandler) => {
console.log(typeof pathArray);

  // creating an array to pass the files into it
  let fileArray = [];

  const readFile = (path, callback) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
        callback(err);
        return;
      }

      fileArray.push(path);
      callback(null);
    });
  };



  readFile(pathArray[0], (err) => {
    err ? doneHandler(err) : readFile(pathArray[1], (err) => {
      err ? doneHandler(err) : readFile(pathArray[2], (err) => {
        doneHandler(err, fileArray);
      });
    });
  });

}
