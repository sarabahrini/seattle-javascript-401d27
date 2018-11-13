'use strict';

const List = require('../lib/list.js');
describe('Testing the List module', () => {
  const loadArray = [3, 7, 8, 2, 1, 9];
  const testingList = () => {
    let newList = new List();
    for (let i = 0; i <= loadArray.length; i++) {
      newList.push(loadArray[i]);
    }
    return newList;
  };

  describe('Testing the initial state of the instance', () => {
    it('should have a length of zero', () => {
      let initial = new List();
      expect(initial.length).toBe(0);
    });

    it('should be an instance of the list class', () => {
      let instance = testingList();
      console.log(typeof instance);
      expect(typeof instance).toBeTruthy();
    });
  });

  describe('Testing the push method', () => {
    it('should add a new element to the list', () => {
      let list = testingList();
      list.push(9);
      expect(list[list.length - 1]).toBe(9)
    });
    it('should increased by one for each pushed element into the list ', () => {
      let list = testingList();
      list.push(10);
      expect(list.length).toBe(8);
    });
    it('should add to the length for each element added to the list', () => {
      let list = testingList();
      list.push(10);
      expect(list.length).toBe(8);
      expect(list[list.length - 1]).toBe(10)
    });
  });

  describe('Testing the pop method', () => {
    it('should remove and return the last element from the list', () => {
      let newList = new List();
      newList.push(1);
      newList.push(2);
      expect(newList.pop()).toBe(2);
    });
    it('should return the length of the list by one ', () => {
      let newList = testingList();
      newList.pop();
      expect(newList.length).toBe(6);

    });
    it('should throw an error if an argument is passed in ', () => {
      let newList = testingList();
      // let actual = newList.pop(7);
      expect(() => newList.pop(7)).toThrow();
    });
    it('should throw an error if the list is empty', () => {
      let list = testingList();
      let actual = list.pop;
      expect(actual).toThrow();
    });
  });

  describe('Testing the map method', () => {
    it('should apply the callback function to each element in the list', () => {
      let list = testingList();
      let actual = list.map(num => num * 2);
      expect(actual.length).toBe(list.length);
      expect(actual).not.toBe(list);

    });
    xit('should throw an error if a callback is omitted', () => {
      let list = testingList();
      let actual = list.map();
      expect(actual).toThrow();
    });

    xit('should throw an error if the list is empty', () => {
      // let list = new List();
      // let actual = list.map( num => num * 2 );
      // expect(actual).toThrow();
    });
  });

xdescribe('Testing the filter method', () => {
    xit('should return a new array containing only the element that meet the condition', () => { 
      let list =testingList();
      let actual = list.filter(num => num % 2 === 0);
      expect(actual.length).toBe(2);

    });
   it('should throw an error if a callback/function is omitted', () => { 
     
    });
    xit('should throw an error if the list is empty', () => { });
  });

  xdescribe('Testing the reduce method', () => {
    it('should return a single element that is returned after after the callback is invoked on each element', () => { });
    it('should throw an error if initial state is omitted', () => { });
    it('should throw an error if the callback is omitted', () => { });
    it('should throw an error if the list is empty', () => { });

  });
  xdescribe('Testing the slice method', () => {
    it('should return the subset of values', () => { });
    it('should utilize the length of the array as the end value if the end is omitted', () => { });
  });
});
