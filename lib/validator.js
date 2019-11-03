'use strict';

class Validator {
/**
 * Method: isValid
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param {any} input
 * @param {function} rules - that defines what do validate
 * @returns {boolean}
 */
  isValid (input1, rules) {
    return rules(input1);
  }

  /**
 * Method: isString?
 * @param input {anything} input - is this input a valid string
 * @returns {boolean}
 */
  isString (input) {
    return typeof input === 'string'; //returns Boolean
  }

  /**
 * Method: isNumber
 * @param input
 * @returns {boolean}
 */
  isNumber (input) {
    return typeof input === 'number';
  }

  /**
 * Method: isArray
 * @param input
 * @returns {boolean}
 */
  isArray (input) {
    return Array.isArray(input);
  }

  /**
 * Method: is Object
 * @param input
 * @returns {boolean}
 */
  isObject (input) {
    return typeof input === 'object';
  }

  /**
 * Method: isBoolean
 * @param input
 * @returns {boolean}
 */
  isBoolean (input) {
    return typeof input === 'boolean';
  }

  /**
 * Method: isFunction
 * @param input
 * @returns {boolean}
 */
  isFunction (input) {
    return typeof input === 'function';
  }

  /**
 * Are all values in array same type?
 * @param input
 * @returns {boolean}
 */
  //iterate through and check that all elements are same type using sort() and typeof.
  arrayTypesSame (input) {
    const type = typeof input[0];
    for(let i = 1; input.length>0; i++){
      if (typeof input[i] !== type) {
        return false;
      }
      return true;
    }

  }
}

module.exports = Validator;
