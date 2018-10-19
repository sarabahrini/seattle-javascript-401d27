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
module.exports = (path1, fileReadComplete) => {
  const fileDataFetched = (err, data) => {
    if (err) fileReadComplete(err);
    return;
  
  fileReadComplete(null, data.toString());
  };
  fs.readFilePath(path1, fileDataFetched);
  return undefined;
};
//reader module should take an array of three 
//resolve a mapped array of strings loaded from each file using an error-first callback


//string data should be in the same order as the file path data (mapped)
// if an error occurs it should immediately reject the error using callback and stop execution
//function signature (paths, callback) => undefined
//on failure, the file reader module should invoke the callback with an error callback(error)
//on success, the file reader module should invoke the callback with null as the first parameter and the result as the second parameter - callback(null, result)






//Stretch - write the file reader function recursively so that it will be able to support 0 or more paths

// module.exports = (path1, fileReadComplete) => {
// const fileDataFetched = (err, data) => {
//   if(err) throw err;
//     fileReadComplete(null, data.toString(), 1000);
//     // setTimeOut (() => fileReadComplete(null, data.toString(), 1000));
// };
// fs.readFile(path1, fileDataFetched);
 
// return undefined;
// };






// this is a BLOCKING operation (it lives in the call stack until it finishes), therefore not recommended for use.
// // It will read a file's contents and return a buffer
// let data = fs.readFileSync(path1);
// // console.log(data.toString());

// console.log(data);

// module.exports = (file1, callback) => {
//   let fileArray = [];

//   fs.readFile(file1, (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log(data);
//     // file1.push(fileArray);

//   });

// };

// fs.readFile(file1);



////////
