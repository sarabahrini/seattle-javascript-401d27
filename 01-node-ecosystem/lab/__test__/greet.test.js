'use strict'

const greet = require('../lib/greet.js');

describe('Testing the hello module', () => {
  it('should add hello to the passed string when the function is invoked with a parameter', () => {
    let expected = 'hello world';
    let actual = greet('world');
    expect(actual).toBe(expected);
  });

  it('should return null if the function is invoked with a non string parameter', () => {
    let expected = null;
    let actual = greet(12);
    expect(actual).toBe(expected);
  });

  it('should return null if the function is invoked with empty parameter', () => {
    let expected = null;
    let actual = greet();
    expect(actual).toBe(expected);
  });

});

