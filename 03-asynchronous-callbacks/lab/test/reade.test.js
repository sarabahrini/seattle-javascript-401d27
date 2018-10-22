
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

      const expected = pathArray;
      
      expect(actual).toBe(expected);
      done();

    });

  });
});

