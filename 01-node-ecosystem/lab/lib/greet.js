'use strict'

module.exports = exports = (str) => {

    if (typeof str === 'string') {
        return "hello " + str;
    } 
    else {
        return null;
    }
};




// Write a test that expects the greet module to return null when you supply non-string values

//Write a test the expects the greet module to return 'hello world'

//This should happen when invoked with 'world' as the first argument