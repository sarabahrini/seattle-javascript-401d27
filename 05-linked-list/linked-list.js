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
    if (newNode.value === null) {
      return undefined;
    }
    this.head = newNode;
    //alternative for above code is 
    // this.head = new Node(value,this.head);
    return this;
  }


  append(value) {

    let newNode = new Node(value);
    let currentNode = this.head;

    if (this.head === null) {
      this.head = newNode;
      return this;
    }
    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode;
    return this;
  }

  include(value) {
    //returns boolean result depending on whether there is a node with that value (argument)
    // let currentNode = this.head;

    while (this.head) {
      if (this.head.value === value) {
        return true;
      } else {
        this.head = this.head.next;
      }
    }

    return false;
  }

  //outputs current node values in the LinkedList
  print() {
    let currentNode = this.head;
    let listArray = [];
    while (currentNode) {
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listArray.join(',');
  }

  insertBefore(targetNode, value) {
    let newNode = new Node(value, this.head);
    let currentNode = this.head;
    while (include(targetNode.value) == false) {
      if (currentNode.value === targetNode) {
        insert(value);
      } else if (currentNode.next !== targetedNode) {
        currentNode = currentNode.next;
        insert(value)
      }
    }
    return undefined;

  }

  insertAfter(targetNode, value) {
    let newNode = new Node(value, this.head);
    let currentNode = this.head;
    while (include(targetNode.value) == false) {
      if (currentNode.next === null) {
        this.append(targetNode);
       } else if(currentNode.next.value === targetNode){
         currentNode = currentNode.next.next;
         insert(value)
       }
       

    }
    return undefined;

  }
};

module.exports = {
  LinkedList: LinkedList,
  Node: Node,
};





