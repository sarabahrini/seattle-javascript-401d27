'use strict'


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






















//Test each method for improper use (invoked with one or more non-number arguments