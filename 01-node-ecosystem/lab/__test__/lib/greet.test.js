'use strict'

const hello = require('../../lib/greet.js');

describe('Testing the hello module', () => {
  it('should add hello to the passed string when the function is invoked with a parameter', () => {
    expect(hello("world")).toBe('hello world');
  });
  it('should return null if the function is invoked with a non string parameter', () => {
    expect(hello(12)).toBe(null);
  });
  it('should return null if the function is invoked with empty parameter', () => {
    expect(hello()).toBe(null);
  });
});

// // another way to do the same thing I done above is:
// const greet = require('../../lib/greet.js');
// describe('greet module',() => {
//   it('should say hello foo', ()=>{
//     //I should complete this with watching the class 401 Oct16th record (video)
//   })
// })

