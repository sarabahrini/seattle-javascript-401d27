'use strict';

const readFile = require('../libs/read-file.js');
const writeFile = require('../libs/write-file.js');
const Bitmap = require('../libs/bmp-parse.js');
const makeGreen = require('../libs/green.js');
const makeNegative = require('../libs/negative.js')
const makeVisor = require('../libs/makeVisor.js');

const nameArg = '../assets/baldy.bmp';

describe('Test to verify file I/O for read and write ', () => {

  it('should successfully load a file into the buffer', (done) => {});
  it(`should write a new file with name 'newbaldy'`, (done) => {});

});


describe('Test to verify a new Bitmap instance can be made.', () => {

  it('should make a new instance of Bitmap with the passed filename', () => {});

});


describe('Test to verify the file is a BMP and can be parsed', () => {

  it('should verify that the file is a BMP', (done) => {});
  it('should find the color table for the BMP', (done) => {});
  it('should find the start of the pixel data for the BMP', (done) => {});

});


describe('Test to verify color table transformations', () => {

  it(`should transform the file by replacing the blues with greens`, (done) => {});
  it('should creative a photo negative from the color chart', (done) => {});

});


describe('Test to verify rasterization can take place', () => {

  it('should creative a visor over the eyes by modifying the pixels.', (done) => {});

});
