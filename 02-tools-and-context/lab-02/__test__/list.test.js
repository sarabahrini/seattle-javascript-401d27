'use strict';

const List = require('../lib/list.js');
/// Note go to uncommented  test and as you move forward delete the commented out tests.

// describe('Testing the List module', () => {
//   it('should have a length of zero', () => {
//     let initialList = new List();
//     expect(initialList.length).toBe(0);
//   });

//   it('should add a new element to the List', () => {
//     let pushList = new List();
//     pushList.push(6);
//     pushList.push(8);
//     pushList.push(1);
//     pushList.push(3);
//     console.log(pushList);
//     expect(pushList.length).toBe(4);
//   });

//   it('should iterate over the array and run the callback for each element', () => {
//     let mapList = new List();
//     mapList.push(5);
//     mapList.push(4);
//     mapList.push(9);
//     mapList.push(16);

//     let actual = mapList.map(num => num * 2);
//     expect(actual.length).toEqual(mapList.length);
//     expect(actual).not.toEqual(mapList);
//   });

//   it('should return a new list with last index removed', () => {
//     let popList = new List();
//     popList.push(4);
//     // popList.pop();
//     expect(popList.pop()).toBe(0);
//     expect(popList.length).toEqual(0);

//   });

//   it('should return a new array including the given start and end point given', () => {
//     let sliceList = new List();
//     sliceList.push(1);
//     sliceList.push(6);
//     sliceList.push(8);
//     sliceList.push(2);
//     sliceList.push(5);

//     let actual = sliceList.slice(1, 3);
//     expect(actual).toEqual({
//       "0": 6,
//       "1": 8,
//       "length": 2
//     });

//   });

// });

describe('Testing the List module', () => {
  const loadArray = [3, 7, 8, 2, 1, 9];
  const testingList = () => {
    let newList = new List();
    for (let i=0; i<=loadArray.length; i++){
      newList.push(loadArray[i]);
    }
    return newList 
  };

describe('Testing the initial state of the instance', () => {
  it('should have a length of zero', () => {});
  it('should be an instance of the list class', () => {});
});

describe('Testing the push method', () => {
  it('should add a new element to the list ', () => {});
  it('should increased by one for each pushed element into the list ', () => {});
  it('should add a new element to the list', () => {});
});

describe('Testing the pop method', () => {
  it('should remove and return the last element from the list ', () => {});
  it('should return the length of the list by one ', () => {});
  it('should throw an error if an argument is passed in ', () => {});
  it('should throw an error if the list is empty', () => {});
});


describe('Testing the map method', () => {
  it('should apply the callback function to each element in the list', () => {});
  it('should throw an error if a callback is omitted', () => {});
  it('should throw an error if the list is empty', () => {});
});

describe('Testing the filter method', () => {
  it('should return a new array containing only the element that meet the condition', () => {});
  it('should throw an error if a callback is omitted', () => {});
  it('should throw an error if the list is empty', () => {});
});

describe('Testing the reduce method', () => {
  it('should return a single element that is returned after after the callback is invoked on each element', () => {});
  it('should throw an error if initial state is omitted', () => {});
  it('should throw an error if the callback is omitted', () => {});
  it('should throw an error if the list is empty', () => {});
 
});
describe('Testing the slice method', () => {
  it('should return the subset of values', () => {});
  it('should utilize the length of the array as the end value if the end is omitted', () => {});
});
});
