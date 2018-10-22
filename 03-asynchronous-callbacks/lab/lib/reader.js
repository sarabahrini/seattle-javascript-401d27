'use strict';

const fs = require('fs');

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
