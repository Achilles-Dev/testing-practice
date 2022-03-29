const { test, expect } = require('@jest/globals');
const stringLength = require('./task1');

const reverseString = require('./task2');

const calculator = require('./task3');

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

//Calculator

describe('add', () => {
	test('adds 0 and 0', () => {
		expect(calculator.add(0,0)).toBe(0);
	});

	test('adds 2 and 2', () => {
		expect(calculator.add(2,2)).toBe(4);
	});

	test('adds positive numbers', () => {
		expect(calculator.add(2,6)).toBe(8);
	});
});

describe('subtract', () => {
	test('subtracts numbers', () => {
		expect(calculator.subtract(10,4)).toBe(6);
	});

  test('subtracts 0 from 1', () => {
    expect(calculator.subtract(1,0)).toBe(1);
  })
});

describe('multiply', () => {
	test('multiplies two numbers', () => {
		expect(calculator.multiply(2, 4)).toBe(8);
	});

	test('multiplies number and 0', () => {
		expect(calculator.multiply(5, 0)).toBe(0);
	});
});

describe('divide', () => {
	test('divides two numbers', () => {
		expect(calculator.divide(32, 4)).toBe(8);
	});

	test('divides 0 by number', () => {
		expect(calculator.divide(0, 5)).toBe(0);
	});
});
