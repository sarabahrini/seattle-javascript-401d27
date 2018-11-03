
'use strict';

const getFiles = require('../lib/reader.js');

//connecting the reader.js to the library
let path1 = `${__dirname}/../data/eenie.txt`;
let path2 = `${__dirname}/../data/meenie.txt`;
let path3 = `${__dirname}/../data/moe.txt`;


let pathArray = [path1, path2, path3];

describe('Test the reader for error', () => {
  
  it('Should return the array of files in the same order that they were passed in.', (done) => {
    

    getFiles(pathArray, (err, actual) => {
      if (err) {
        throw console.log(err);
      }

      // console.log(actual)
      const expected = pathArray;
      console.log(actual);
      expect(actual).toEqual(expected);
      done();
    });

  });

  it('Should return false if the returned array is empty.', (done) => {

    let altPath = ['aadd'];

    getFiles(altPath, (err, actual) => {
      // if (err) {
        // throw console.log(err);
      // }

      expect(err).not.toBeNull();
      done();

    });

  });

  it('Should return 3 files', (done) => {

    let altPath = [path1, path2, path3];

    getFiles(altPath, (err, actual) => {
      if (err) {
        throw console.log(err);
      }
    
      expect(actual.length).toBe(altPath.length);
      done();
      

    });
  });

});


