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

    if(value){
    this.storage.push(value);
    this.top = value;
    return this;
    } else { return undefined; }
  
  }
    
  pop(){ 
console.log(this)
    if(this.storage.length > 1 ){    
      this.top = this.storage[this.storage.length-2];
      return this.storage.pop();
    } else if(this.storage.length === 1 ){
      this.top = null;
      return this.storage.pop();

  } else { return "array is empty" }

}

  peek(){ 
    if(this.storage.length === 0){
      return null;
    } else { return this.top}


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
module.exports = {
  Stack: Stack,
  // Node: Node,
};
