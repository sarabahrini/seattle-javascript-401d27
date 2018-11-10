'use strict'


module.exports = {

  add: (numA, numB) => {
    if (typeof numA === 'number' && typeof numB === 'number') {
      return numA + numB;
    } else {
      return null;
    }
  },

  subtract: (numA, numB) => {
    if (typeof numA === 'number' && typeof numB === 'number') {
      return numA - numB;
    } else {
      return null;
    }
  }
};






















//Test each method for improper use (invoked with one or more non-number arguments