'use strict';
const fs = require ('fs');

module.exports = (file, operation,bitmap) => {
fs.readFile(file, (err, buffer) => {

  if (err){
    throw err;
  }

  bitmap.parse(buffer);
  bitmap.transform(operation);

  // note from class - this has to be nested 
  // Also, it uses the bitmap's instance properties for the name and the buffer
  fs.write(bitmap.newFile, bitmap.buffer, (err) => {
    if(err){
      throw err;
    }
    
    console.log(`Bitmap Tranformed: ${bitmap.newFile}`);
  });
});
};