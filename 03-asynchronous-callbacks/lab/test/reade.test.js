
'use strict';

const getFiles = require('../lib/reader.js');

//connecting the reader.js to the library
let path1 = `${__dirname}/../data/eenie.txt`;
let path2 = `${__dirname}/../data/meenie.txt`;
let path3 = `${__dirname}/../data/moe.txt`;


let pathArray = [path1, path2, path3];

describe('Test the reader for error', () => {
  
  xit('Should return the array of files in the same order that they were passed in.', (done) => {
    

    getFiles(pathArray, (err, actual) => {
      if (err) {
        throw console.log(err);
      }

      // console.log(actual)
      const expected = pathArray;

      expect(actual).toEqual(expected);
      done();
    });

  });

  xit('Should return false if the returned array is empty.', (done) => {

    let altPath = ['aadd'];

    getFiles(altPath, (err, actual) => {
      // if (err) {
        // throw console.log(err);
      // }

      expect(err).not.toBeNull();
      done();

    });

  });

  it('Should return Truthy if files are returned in the wrong order.', (done) => {

    let altPath = [path2, path3, path1];

    getFiles(pathArray, (err, actual) => {
      // if (err) {
      //   throw console.log(err);
      // }

      expect(err).toThrow();
      done();
      

    });
  });

});


