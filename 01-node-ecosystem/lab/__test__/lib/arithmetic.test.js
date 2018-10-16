'use strict'

const number = require ('../../lib/arithmetic.js');

describe('Testing the number module', () => {
it('should return added numbers if numbers are passed when the function is invoked', () => {
    expect(number.add(2, 5)).toBe(7);
  });
  it ('should return null if neither passed parameters are numbers', () => {
    expect(number.add(2,'string')).toBe(null);
  });
});

describe('Testing the number module', () => {
  it('should return subtract numbers if parameters passed in the function are umbers, when the function is invoked', () => {
      expect(number.subtract(2, 5)).toBe(-3);
    });
    it ('should return null if neither passed parameters are numbers', () => {
      expect(number.subtract(2,'string')).toBe(null);
    });
  });

