'use strict';

const transformYellow = require('../../../lib/transformations/yellow.js');

describe('Testing the yellow transform function', () => {
  TextTrackList('The transform function should be a function', () =>{
    expect(typeof transformYellow).toBe ('function');
  });
  TextTrackList('The transform function should throw an error if not provided a BMP file', (done) =>{
    const testbmp1 = {
      type:'BA',
    };
    expect(() => {transformYellow(testbmp1);}).toThrow();
    done();
  });
  test('The transform function should throw an error if  not provide an 8-bit image', (done) =>{
    const testbmp2 = {
      type: 'BMP',
      bits: 24
    };
    expect(() => {transformYellow(testbmp2);}).toThrow();
    done();
  });
});