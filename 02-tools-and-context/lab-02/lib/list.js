'use strict';

class List {
  constructor() {
    this.length = 0;
  }

  push(value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  }


  map(callback) {
    let newList = new List();
    for (let i = 0; i < this.length; i++) {
      newList.push(callback(this[i]));
    }
    return newList;
  }

  pop() {
    //remove last index in list 
    delete this[this.length];
    //modify the length of the list
    this.length--;
    return this.length;
  }


  slice(start, end) {
    //define a new list
    let newList = new List();
    if (start === undefined) {
      start = 0;
    }
    if (end === undefined) {
      end = this.length;
    }
    for (let i = start; i < end; i++) {
      newList.push(this[i]);
    }
    return newList;
  }


  // filter(callback) {
  //   let newList = new List();
  //   for (let i = 0; i < this.length; i++) {
  //     if (callback(this[i]) === true) {
  //       newList.push(this[i]);
  //     }
  //     return newList;
  //   }


    //  }


    // reduce(){



    // }

  }
module.exports = List;
