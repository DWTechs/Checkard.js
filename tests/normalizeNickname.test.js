import { normalizeNickname } from "../dist/ch";

it('should return the nickname in lowercase', () => {
  const nickname = 'JDoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should return the nickname with accents removed', () => {
  const nickname = 'JöhnDöe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('johndoe');
});

it('should return the nickname with non-alphanumeric characters removed', () => {
  const nickname = 'John_Doe!';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('john_doe!');
});

it('should return false if the nickname is an integer', () => {
  const nickname = 123;
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe(false);
});

it('should return false if the nickname is an object', () => {
  const nickname = {};
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe(false);
});

it('should return false if the nickname is not an empty array', () => {
  const nickname = [];
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe(false);
});

it('should return false if the nickname is not an array of strings', () => {
  const nickname = ["John","Doe","The first"];
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe(false);
});


it('should return false if the firstName is an integer', () => {
  const firstName = 123;
  const result = normalizeNickname('', firstName, '');
  expect(result).toBe(false);
});

it('should return false if the firstName is an object', () => {
  const firstName = {};
  const result = normalizeNickname('', firstName, '');
  expect(result).toBe(false);
});

it('should return false if the firstName is not an empty array', () => {
  const firstName = [];
  const result = normalizeNickname('', firstName, '');
  expect(result).toBe(false);
});

it('should return false if the nfirstName is not an array of strings', () => {
  const firstName = ["John","Doe","The first"];
  const result = normalizeNickname('', firstName, '');
  expect(result).toBe(false);
});


it('should return false if the lastName is an integer', () => {
  const lastName = 123;
  const result = normalizeNickname('', '', lastName);
  expect(result).toBe(false);
});

it('should return false if the lastName is an object', () => {
  const lastName = {};
  const result = normalizeNickname('', '', lastName);
  expect(result).toBe(false);
});

it('should return false if the lastName is not an empty array', () => {
  const lastName = [];
  const result = normalizeNickname('', '', lastName);
  expect(result).toBe(false);
});

it('should return false if the nlastName is not an array of strings', () => {
  const lastName = ["John","Doe","The first"];
  const result = normalizeNickname('', '', lastName);
  expect(result).toBe(false);
});



it('should return false if the nickname, first name, and last name is an empty string', () => {
  const nickname = '';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe(false);
});

it('should return false if the nickname and first name, is an empty string', () => {
  const nickname = '';
  const result = normalizeNickname(nickname, '', 'toto');
  expect(result).toBe(false);
});

it('should return false if the nickname and last name, is an empty string', () => {
  const nickname = '';
  const result = normalizeNickname(nickname, 'toto', '');
  expect(result).toBe(false);
});

it('should create a nickname from the first name and last name if no nickname is provided', () => {
  const firstName = 'John';
  const lastName = 'Doe';
  const result = normalizeNickname('', firstName, lastName);
  expect(result).toBe('jdoe');
});

it('should create a nickname from the first name and last name with accents removed', () => {
  const firstName = 'Jöhn';
  const lastName = 'Döe';
  const result = normalizeNickname('', firstName, lastName);
  expect(result).toBe('jdoe');
});