'use strict';

const Validator = require('../lib/validator.js');

describe('validator module performs basic validation of strings, numbers, arrays, objects, booleans, functions', () => {

  const validator = new Validator();

  it('isStrings should return true when passed a string', () => {
    let str = 'yes';
    expect(validator.isString(str)).toBeTruthy();
    // could have written: expect(validator.isString(str)).toEqual(true);
  });

  it('numbers', () => {
    let num = 1;
    expect(validator.isNumber(num)).toBeTruthy();
  });

  it('arrays', () => {
    let arr = ['a'];
    expect(validator.isArray(arr)).toBeTruthy();
  });

  it('objects', () => {
    let obj = {x:'y'};
    expect(validator.isObject(obj)).toBeTruthy();
  });

  it('booleans', () => {
    let bool = false;
    expect(validator.isBoolean(bool)).toBeTruthy();
  });

  it('functions', () => {
    let func = () => {};
    expect(validator.isFunction(func)).toBeTruthy();
  });
});

describe('validator module performs complex validations', () => {

  // it('validates the presence of required object properties at any level', () => {
  //   // i.e. does person.hair.color exist and have a good value, not just person.hair
  //   let person = {name: 'James', legs: 2, hair: {color: 'brown', length: 'short'}};
  //   //is animal an object
  //   expect(validator.isObject(obj)).toBeTruthy();
  //   //does person.hair.color exist?
  //   expect(validator.requiredProperty(object)).toBeTruthy();
  // });

  // it('validates the proper types of object properties', () => {
  //   // i.e. person.name must be a string, etc.
  //   expect(true).toBeFalsy();
  // });

  it('validates the types of values contained in an array', () => {
    let arr = ['a', 'b', 'c', 'd'];
    let badArr = ['a', 3, 'c', 18]
    //check that array is array
    expect(validator.isArray(arr)).toBeTruthy(); //if true, passes.
    expect(validator.isArray(badArr)).toBeTruthy(); //if true, passes.

    expect(validator.arrayTypesSame(arr)).toBeTruthy();
    expect(validator.arrayTypesSame(badArr)).toBeFalsy();
  });


  // it('validates a value array against an approved list', () => {
  //   // i.e. a string might only be allowed to be "yes" or "no"
  //   expect(true).toBeFalsy();
  // });

  // TODO: Cover so, so many more cases

});
