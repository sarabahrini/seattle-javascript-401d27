'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
};

class LinkedList {
  constructor(node = null) {
    this.head = node;
  }
  //makes a new node with that value
  insert(value) {
    // if(this.head === null){
    //   let newNode = new Node(value);
    //   this.head = newNode;
    // } else {
    let newNode = new Node(value, this.head);
    this.head = newNode;
    //alternative for above code is 
    // this.head = new Node(value,this.head);
  }
  include(value) {
    //returns boolean result depending on whether there is a node with that value (argument)
    let currentNode = this.head;
    while (currentNode.value !== value) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      } 
    }
    return false;
  }

  //outputs current node values in the LinkedList
  print(){
    let currentNode = this.head;
    while(currentNode !== null){
  console.log(currentNode);
  currentNode=currentNode.next;
    }
  }
};





