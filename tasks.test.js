const stringLength = require('./task1');

it('Length of string', () => {
  expect(stringLength('Today')).toBe(5)
});

it('Empty string', () => {
  expect(stringLength('')).toBe('String too short!');
});

it('Long string', () => {
  expect(stringLength('The is a very long string')).toBe('String too long!');
});
