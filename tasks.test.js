const { it, expect } = require('@jest/globals');
const stringLength = require('./task1');

const reverseString = require('./task2');

//String Length
it('Length of string', () => {
  expect(stringLength('Today')).toBe(5)
});

it('Empty string', () => {
  expect(stringLength('')).toBe('String too short!');
});

it('Long string', () => {
  expect(stringLength('The is a very long string')).toBe('String too long!');
});

//Reverse String
it('Reverse String', () => {
  expect(reverseString('Today')).toBe('yadot');
});

it('Reverse String', () => {
  expect(reverseString('The is a very long string')).toBe('gnirts gnol yrev a si eht');
});
