'use strict';

const LinkedListClass = require('./linked-list.js');

const LinkedList = LinkedListClass.LinkedList
const Node = LinkedListClass.Node

describe('Test to verify each class can be created', () => {


  it('Should create an empty LinkedList that returns a head value of Null', () => {

    let list = new LinkedList();

    let actual = list.head;
    let expected = null;

    expect(actual).toBe(expected);

  });

  it('Should create a newNode that returns a value of 5 and a next of Null', () => {

    let newNode = new Node(5);

    let actual = newNode.value;
    let expected = 5;

    expect(actual).toBe(expected);
  });

});

describe('Test to verify if the methods function', () => {

  it('Should INSERT a new head with value of 5 to the LinkedList', () => {

    let list = new LinkedList();


    let actual = list.insert(5);
    let expected = 5;

    expect(actual.head.value).toBe(expected);
  });

  it('Should return undefined when null is INSERTED as the value to the LinkedList', () => {

    let list = new LinkedList();


    let actual = list.insert(null);
    let expected = undefined;

    expect(actual).toBe(expected);
  });


  it('Should should return true if the LinkedList INCLUDEs a node with the same inserted value(5)', () => {

    let list = new LinkedList();
    list.insert(5);
    list.insert(4);
    list.insert(2);
    list.insert(0);

    let actual = list.include(5);

    expect(actual).toBeTruthy();
  });

  it('Should should return false if the LinkedList does not INCLUDE a node with the same inserted value(5)', () => {

    let list = new LinkedList();
    list.insert(8);
    list.insert(7);
    list.insert(2);
    list.insert(1);

    let actual = list.include(5);

    expect(actual).toBeFalsy();
  });

  it('Should print the Node values in the LinkedList', () => {

    let list = new LinkedList();
    list.insert(8);
    list.insert(7 * 3);
    list.insert(2);
    list.insert(1);


    let actual = list.print();
    let expected = '1,2,21,8';

    expect(actual).toBe(expected);
  });



  it('Should print the Node values in the LinkedList', () => {

    let list = new LinkedList();
    list.insert(8);
    list.insert(7);
    list.insert(2);
    list.insert(1);


    let actual = list.print();
    let expected = '1,2,7,8';

    expect(actual).toBe(expected);
  });


  it('Should print the Node values in the LinkedList', () => {

    let list = new LinkedList();
    list.insert();

    let actual = list.print();
    let expected = '';

    expect(actual).toBe(expected);
  });


});