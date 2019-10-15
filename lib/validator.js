'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  return true;
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
validator.isNumber = (input) => {
  return typeof input === 'number';
};

/**
 * Is it an array?
 * @param input
 * @returns {boolean}
 */
validator.isArray = (input) => {
  return Array.isArray(input);
};

/**
 * Is it an object?
 * @param input
 * @returns {boolean}
 */
validator.isObject = (input) => {
  return typeof input === 'object';
};

/**
 * Is it a boolean?
 * @param input
 * @returns {boolean}
 */
validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};

/**
 * Is it a function?
 * @param input
 * @returns {boolean}
 */
validator.isFunction = (input) => {
  return typeof input === 'function';
};

/**
 * Are all values in array same type?
 * @param input
 * @returns {boolean}
 */
//iterate through and check that all elements are same type using sort() and typeof.
validator.arrayTypesSame = (input) => {
  const type = typeof input[0];
    for(let i = 1; input.length>0; i++){
      if (typeof input[i] !== type) {
      return false;
      }
      return true;
    }
};

/**
 * Area all values in array same type?
 * @param input
 * @returns {boolean}
 */
validator.requiredProperty = (input) => {
  if()
}