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
    if(!callback) throw new Error('Please provide a callback');
    if(!this.length) throw new Error('List is empty');
    for (let i = 0; i < this.length; i++) {
      newList.push(callback(this[i]));
      
    }
    return newList;
  }

  // slice(start, end) {
  //   //define a new list
  //   let newList = new List();
  //   if (start === undefined) {
  //     start = 0;
  //   }
  //   if (end === undefined) {
  //     end = this.length;
  //   }
  //   for (let i = start; i < end; i++) {
  //     newList.push(this[i]);
  //   }
  //   return newList;
  // }


  // filter(func) {
  //   let newList = new List();
  //   for (let i = 0; i < this.length; i++) {
  //     if (func(this[i])) {
  //       newList.push(this[i]);
  //     }
  //   } 
  //   return newList;


  //    }

reduce(callback, initial){
  if(!this.length) throw new Error('List is empty');
  if(!callback) throw new Error('Please provide a callback');
  if(!initial) throw new Error('Please provide a start point');
  for (let i=0; i<=this.length-1; i++){
    initial = callback(initial, this[i], i);
  }
  return initial;
};

slice(start, end){

}
//       //help from http://reactivex.io/learnrx/
//   reduce(acc, start) {
//     let total, count = 0;

//     // if there is no current val set the total to the first val
//     // unsure why the count starts at 1 as opposed to 0 down below
//     if(start == undefined) {
//         count = 1;
//         total = this[0];
//     }

//     // if a current val is given, make the total equal to it
//     // unsure why the count starts at 0 though
//     else {
//         count = 0;
//         total = start;
//     }

//     // increase the total with a callback until the length of the array is reached
//     while (count < this.length) {
//         total = acc(total, this[count]);
//         count++;
//     }

//     //return the number
//     return total;
// }
};

  
module.exports = List;
