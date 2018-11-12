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

  pop() {
    if (!this.length) throw new Error('The list is empty');
    if ( arguments.length > 0 ) throw new Error('No value needed')

    let item = this[this.length-1];
    delete this[this.length-1];
    this.length--;
    return item;
  }

  map(callback) {
    let newList = new List();
    for (let i = 0; i < this.length; i++) {
      newList.push(callback(this[i]));
    }
    return newList;
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
