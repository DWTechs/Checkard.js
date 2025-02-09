import { isValidDate } from "../../dist/ch";

const s1 = Symbol();
const date = new Date('1/1/1900');
const json = `{
  "actor": {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;
const invalidjson = `{
  "actor: {
    "name": "Tom Cruise",
    "age": 56
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;
function testFunction() {
  console.log("function");
}
const para = document.createElement("p");
const node = document.createTextNode("new node");


test("sends date to isValidDate", () => {
  expect(isValidDate(date)).toBe(true);
});

test("sends valid date as string to isValidDate", () => {
  expect(isValidDate(new Date('1/5/1900'))).toBe(true);
});

test("sends valid date as string to isValidDate with min & max", () => {
  expect(isValidDate(new Date('1/5/1900'), new Date('1/1/1900'), new Date('1/1/1901'))).toBe(true);
});

test("sends current timestamp to isValidDate", () => {
  expect(isValidDate(date.getTime())).toBe(false);
});

test("sends positive even integer to isValidDate", () => {
  expect(isValidDate(2)).toBe(false);
});

test("sends positive odd integer to isValidDate", () => {
  expect(isValidDate(1)).toBe(false);
});

test("sends positive odd integer to isValidDate with min date", () => {
  expect(isValidDate(1, new Date('1/5/1920'))).toBe(false);
});

test("sends true to isValidDate", () => {
  expect(isValidDate(true)).toBe(false);
});

test("sends positive even integer to isValidDate with min date", () => {
  expect(isValidDate(2, new Date('1/5/1920'))).toBe(false);
});

test("sends invalid negative timestamp to isValidDate", () => {
  expect(isValidDate(-2208988800001)).toBe(false);
});

test("sends invalid timestamp to isValidDate", () => {
  expect(isValidDate(7258118400001)).toBe(false);
});

test("sends invalid date as string to isValidDate with min & max", () => {
  expect(isValidDate('1/5/1800', '1/1/1900', '1/1/1901')).toBe(false);
});

test("sends invalid date to isValidDate with min & max", () => {
  expect(isValidDate(new Date('1/5/1800'), '1/1/1900', '1/1/1901')).toBe(false);
});

test("sends valid date as string to isValidDate with min & max", () => {
  expect(isValidDate('1/5/1900', '1/1/1900', '1/1/1901')).toBe(false);
});

test("sends date in string format to isValidDate", () => {
  expect(isValidDate('1/1/1900')).toBe(false);
});

test("sends null to isValidDate", () => {
  const n = null;
  expect(isValidDate(n)).toBe(false);
});

test("sends current timestamp to isValidDate outside max range", () => {
  expect(isValidDate(date.getTime(), null, new Date('1/1/2020'))).toBe(false);
});

test("sends current timestamp to isValidDate outside lower range", () => {
  expect(isValidDate(date.getTime(), new Date('1/1/2010'), new Date('1/1/2020'))).toBe(false);
});

test("sends curret timestamp to isValidDate outside min range", () => {
  expect(isValidDate(date.getTime(), new Date('1/1/2060', null))).toBe(false);
});

test("sends current timestamp to isValidDate outside upper range", () => {
  expect(isValidDate(date.getTime(), new Date('1/1/2050'), new Date('1/1/2060'))).toBe(false);
});

test("sends undefined to isValidDate", () => {
  expect(isValidDate(undefined)).toBe(false);
});

test("sends symbol to isValidDate", () => {
  expect(isValidDate(s1)).toBe(false);
});

test("sends false to isValidDate", () => {
  expect(isValidDate(false)).toBe(false);
});

test("sends string to isValidDate", () => {
  expect(isValidDate("string")).toBe(false);
});

test("sends zero to isValidDate", () => {
  expect(isValidDate(0)).toBe(false);
});

test("sends positive float to isValidDate", () => {
  expect(isValidDate(1.1)).toBe(false);
});

test("sends negative odd integer to isValidDate", () => {
  expect(isValidDate(-1)).toBe(false);
});

test("sends negative even integer to isValidDate", () => {
  expect(isValidDate(-2)).toBe(false);
});

test("sends negative float to isValidDate", () => {
  expect(isValidDate(-1.1)).toBe(false);
});

test("sends object to isValidDate", () => {
  expect(isValidDate({})).toBe(false);
});

test("sends empty array to isValidDate", () => {
  expect(isValidDate([])).toBe(false);
});

test("sends array of 1 integer to isValidDate", () => {
  expect(isValidDate([2])).toBe(false);
});

test("sends array of 2 integers to isValidDate", () => {
  expect(isValidDate([2,1])).toBe(false);
});

test("sends array of 1 integer to isValidDate", () => {
  expect(isValidDate([2.1])).toBe(false);
});

test("sends array of 2 integers to isValidDate", () => {
  expect(isValidDate([2.1,1.1])).toBe(false);
});

test("sends array to isValidDate", () => {
  expect(isValidDate(["white", "grey", "black"])).toBe(false);
});

test("sends json to isValidDate", () => {
  expect(isValidDate(json)).toBe(false);
});

test("sends invalid json to isValidDate", () => {
  expect(isValidDate(invalidjson)).toBe(false);
});

test("sends function to isValidDate", () => {
  expect(isValidDate(testFunction)).toBe(false);
});

test("sends htmlElement to isValidDate", () => {
  expect(isValidDate(para)).toBe(false);
});

test("sends node to isValidDate", () => {
  expect(isValidDate(node)).toBe(false);
});

test("sends regex to isValidDate", () => {
  expect(isValidDate(/ab+c/i)).toBe(false);
});
