'use strict';

const Classes = require ('../lib/stacks-and-queues.js');

const Stack = Classes.Stack;
const Queue = Classes.Queue;
const Node = Classes.Node;



describe('Test to see if PUSH method works properly', () => {

  xit('should return top to be equal to the last pushed value', () => {

    const stack = new Stack();
    stack.push('a');
    
  
    const actual = stack.push('b');
    const expected = 'b';
    expect(actual.top).toBe(expected);

  });

  xit('should return "value undefined" when the value is not entered', () => {

    const stack = new Stack();
    stack.push('a');
    stack.push('b');
  
    const actual = stack.push();
    expect(actual).toBeUndefined();

  });    

  xit('should return top to be the pushed value when the stack is empty', () => {

    const stack = new Stack();
    
    const actual = stack.push('a');
    const expected = 'a';
    expect(actual.top).toEqual(expected);

  });
});


describe('Test to  to see if POP method works properly', () => {

  xit('Should remove the last index in array and return the popped value ', () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b')
    stack.push('c');
  console.log(stack)

    const actual = stack.pop();
    const expected = 'c';
    expect(actual).toBe(expected);
  });

  xit('Should return top as null if stack is empty after pop', () => {
    const stack = new Stack();
    stack.push('a');
    stack.pop();

    const actual = stack.top;
    console.log(stack.top)
    const expected = null;
    expect(actual).toBe(expected);
  });

  xit('Should return "array is empty" when trying to pop a value from an empty array', () => {
    const stack = new Stack();

    const actual = stack.pop();
    const expected = "array is empty";
    expect(actual).toBe(expected);
  });


});


describe('Test to see if the PEEK method works properly', () => {

  it('Should return the last pushed value to the Stack',() => {
    const stack = new Stack();    
  
    const actual = stack.peek();
    const expected = null;
    expect(actual).toBe(expected);
  });

  it('Should return the top value when a value is pushed', () => {
    const stack = new Stack();
    stack.push('a');    
  
    const actual = stack.peek();
    const expected = 'a';
    expect(actual).toBe(expected);

  });

  it('Should return null when a value is popped', () => {

    const stack = new Stack();
    stack.push('a');    
    stack.pop();    
  
    const actual = stack.peek();
    const expected = null;
    expect(actual).toBe(expected);

  });
});



xdescribe('Test to is the enqueue works properly', () => {
  xit('Should return the first index of the Stack/ array should be the value enqueue in the stack ', () => {});
  xit('Should return the enqueue value if empty', () => {});
  xit('Should return the last value enqueue (first index) if more than one values are pushed in the array', () => {});
});
xdescribe('Test to is the dequeue works properly', () => {
  xit('Should return the array with popped value', () => {});
  xit('Should return index error if the array is empty', () => {});
  xit('Should return the length of remaining array length', () => {});
});
xdescribe('Test to is the peek works properly', () => {
  xit('Should if array is empty return null', () => {});
  xit('Should return the top value ', () => {});
  xit('Should when dequeue return the last index as the peek', () => {});
});
