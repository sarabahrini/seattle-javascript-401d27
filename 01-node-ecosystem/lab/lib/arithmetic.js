'use strict'


// Use export to export the module as an object to index.js
module.exports = exports = {};



exports.myModuleName = `Sara's 401js Hello World Module`;



exports.add = (numA, numB) => {
  if(typeof numA === 'number' && typeof numB === 'number'){

    return numA + numB;

  } else {
    
    return null;
  }
};

exports.subtract = (numA, numB) => {
  if(typeof numA === 'number' && typeof numB === 'number'){
    return numA - numB;
  } else {
    return null;
  }
};

//alternative. better way for above code, from 401 session 2 Oct 16th code review:
// module.exports = {
//   add: (a, b) => a + b,
//   sub: (a, b) => a - b,
// };




















//Test each method for improper use (invoked with one or more non-number arguments