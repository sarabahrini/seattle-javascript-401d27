'use strict';

// class Node {
//   constructor (value, next=null){
//       this.value = value;
//       this.next = next;
//   }
// };


class Stack{
  constructor(){
    this.storage = [];
    this.top = null;
  };


  push(value){ 
    return this.storage.push(value);
  
  }
    
  pop(){ 
    return this.storage.pop(value);
  }

  peek(){ 
    return this.storage[this.storage.length -1];
    
    
  }
  
};


class Queue{
  constructor(){
    this.storage = [];
    this.front = null;
  };

  enqueue(value){ 
    return this.storage.unshift(value);
  }
    
  dequeue(){ 
    return this.storage.pop(value);
  }

  peek(){ 
    return this.storage[this.storage.length -1];
    
  }


};
