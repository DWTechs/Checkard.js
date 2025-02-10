import { containsNumber } from "../../dist/ch";

test("sends '+true' to containsNumber", () => {
  expect(containsNumber('+true')).toBe(false);
});

test("sends string to containsNumber", () => {
  expect(containsNumber("string")).toBe(false);
});

test("sends string with number to containsNumber", () => {
  expect(containsNumber("str1ng")).toBe(true);
});

test("sends string with 2 numbers to containsNumber", () => {
  expect(containsNumber("5tr1ng")).toBe(true);
});

test("sends positive even integer in string format to containsNumber", () => {
  expect(containsNumber('2')).toBe(true);
});

test("sends positive odd integer in string format to containsNumber", () => {
  expect(containsNumber('1')).toBe(true);
});

test("sends zero in string format to containsNumber", () => {
  expect(containsNumber('0')).toBe(true);
});

test("sends positive float in string format to containsNumber", () => {
  expect(containsNumber('1.1')).toBe(true);
});

test("sends negative odd integer in string format to containsNumber", () => {
  expect(containsNumber('-1')).toBe(true);
});

test("sends negative even integer in string format to containsNumber", () => {
  expect(containsNumber('-2')).toBe(true);
});

test("sends negative float in string format to containsNumber", () => {
  expect(containsNumber('-1.1')).toBe(true);
});

test("sends '8e5' to containsNumber", () => {
  expect(containsNumber('8e5')).toBe(true);
});

test("sends '0x44' to containsNumber", () => {
  expect(containsNumber('0x44')).toBe(true);
});

var json = `{
  "actor": {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;

test("sends json to containsNumber", () => {
  expect(containsNumber(json)).toBe(true);
});

var invalidjson = `{
  "actor: {
    "name": "Tom Cruise",
    "age": 56
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;

test("sends invalid json to containsNumber", () => {
  expect(containsNumber(invalidjson)).toBe(true);
});


// with a min value of 1



test("sends null to containsNumber", () => {
  expect(containsNumber(null, 1)).toBe(false);
});

test("sends undefined to containsNumber", () => {
  expect(containsNumber(undefined, 1)).toBe(false);
});

// const s1 = Symbol();
// test("sends symbol to containsNumber", () => {
//   expect(containsNumber(s1, 1)).toBe(false);
// });

test("sends true to containsNumber", () => {
  expect(containsNumber(true, 1)).toBe(false);
});

test("sends '+true' to containsNumber", () => {
  expect(containsNumber('+true', 1)).toBe(false);
});

test("sends false to containsNumber", () => {
  expect(containsNumber(false, 1)).toBe(false);
});

test("sends string to containsNumber", () => {
  expect(containsNumber("string", 1)).toBe(false);
});

test("sends string with number to containsNumber", () => {
  expect(containsNumber("str1ng", 1)).toBe(true);
});

test("sends string with 2 numbers to containsNumber", () => {
  expect(containsNumber("5tr1ng", 1)).toBe(true);
});

test("sends string with 2 numbers to containsNumber", () => {
  expect(containsNumber("5trin6", 1)).toBe(true);
});

test("sends string with 2 numbers to containsNumber", () => {
  expect(containsNumber("Str1n6", 1)).toBe(true);
});

test("sends positive even integer in string format to containsNumber", () => {
  expect(containsNumber('2', 1)).toBe(true);
});

test("sends positive odd integer in string format to containsNumber", () => {
  expect(containsNumber('1', 1)).toBe(true);
});

test("sends zero in string format to containsNumber", () => {
  expect(containsNumber('0', 1)).toBe(true);
});

test("sends positive float in string format to containsNumber", () => {
  expect(containsNumber('1.1', 1)).toBe(true);
});

test("sends negative odd integer in string format to containsNumber", () => {
  expect(containsNumber('-1', 1)).toBe(true);
});

test("sends negative even integer in string format to containsNumber", () => {
  expect(containsNumber('-2', 1)).toBe(true);
});

test("sends negative float in string format to containsNumber", () => {
  expect(containsNumber('-1.1', 1)).toBe(true);
});

test("sends '8e5' to containsNumber", () => {
  expect(containsNumber('8e5', 1)).toBe(true);
});

test("sends '0x44' to containsNumber", () => {
  expect(containsNumber('0x44', 1)).toBe(true);
});

test("sends json to containsNumber", () => {
  expect(containsNumber(json, 1)).toBe(true);
});

test("sends invalid json to containsNumber", () => {
  expect(containsNumber(invalidjson, 1)).toBe(true);
});

test("sends Coco!asticot to containsNumber", () => {
  expect(containsNumber("Coco!asticot", 1)).toBe(false);
});

test("sends Coco!astic0t to containsNumber", () => {
  expect(containsNumber("Coco!astic0t", 1)).toBe(true);
});

test("sends Coco!ast1c0t to containsNumber", () => {
  expect(containsNumber("Coco!ast1c0t", 1)).toBe(true);
});






// with a min value of 2



test("sends null to containsNumber", () => {
  expect(containsNumber(null, 2)).toBe(false);
});

test("sends undefined to containsNumber", () => {
  expect(containsNumber(undefined, 2)).toBe(false);
});

// const s1 = Symbol();
// test("sends symbol to containsNumber", () => {
//   expect(containsNumber(s1, 2)).toBe(false);
// });

test("sends true to containsNumber", () => {
  expect(containsNumber(true, 2)).toBe(false);
});

test("sends '+true' to containsNumber", () => {
  expect(containsNumber('+true', 2)).toBe(false);
});

test("sends false to containsNumber", () => {
  expect(containsNumber(false, 2)).toBe(false);
});

test("sends string to containsNumber", () => {
  expect(containsNumber("string", 2)).toBe(false);
});

test("sends string with number to containsNumber", () => {
  expect(containsNumber("str1ng", 2)).toBe(false);
});

test("sends string with 2 numbers to containsNumber", () => {
  expect(containsNumber("5tr1ng", 2)).toBe(true);
});

test("sends positive even integer in string format to containsNumber", () => {
  expect(containsNumber('2', 2)).toBe(false);
});

test("sends positive odd integer in string format to containsNumber", () => {
  expect(containsNumber('1', 2)).toBe(false);
});

test("sends zero in string format to containsNumber", () => {
  expect(containsNumber('0', 2)).toBe(false);
});

test("sends positive float in string format to containsNumber", () => {
  expect(containsNumber('1.1', 2)).toBe(true);
});

test("sends negative odd integer in string format to containsNumber", () => {
  expect(containsNumber('-1', 2)).toBe(false);
});

test("sends negative even integer in string format to containsNumber", () => {
  expect(containsNumber('-2', 2)).toBe(false);
});

test("sends negative float in string format to containsNumber", () => {
  expect(containsNumber('-1.1', 2)).toBe(true);
});

test("sends '8e5' to containsNumber", () => {
  expect(containsNumber('8e5', 2)).toBe(true);
});

test("sends '0x44' to containsNumber", () => {
  expect(containsNumber('0x44', 2)).toBe(true);
});

test("sends json to containsNumber", () => {
  expect(containsNumber(json, 2)).toBe(true);
});

test("sends invalid json to containsNumber", () => {
  expect(containsNumber(invalidjson, 2)).toBe(true);
});

test("sends Coco!asticot to containsNumber", () => {
  expect(containsNumber("Coco!asticot", 2)).toBe(false);
});

test("sends Coco!astic0t to containsNumber", () => {
  expect(containsNumber("Coco!astic0t", 2)).toBe(false);
});

test("sends Coco!ast1c0t to containsNumber", () => {
  expect(containsNumber("Coco!ast1c0t", 2)).toBe(true);
});









// with a min value of 1 and a max value of 3



test("sends null to containsNumber", () => {
  expect(containsNumber(null, 1, 3)).toBe(false);
});

test("sends undefined to containsNumber", () => {
  expect(containsNumber(undefined, 1, 3)).toBe(false);
});

// const s1 = Symbol();
// test("sends symbol to containsNumber", () => {
//   expect(containsNumber(s1, 1, 3)).toBe(false);
// });

test("sends true to containsNumber", () => {
  expect(containsNumber(true, 1, 3)).toBe(false);
});

test("sends '+true' to containsNumber", () => {
  expect(containsNumber('+true', 1, 3)).toBe(false);
});

test("sends false to containsNumber", () => {
  expect(containsNumber(false, 1, 3)).toBe(false);
});

test("sends string to containsNumber", () => {
  expect(containsNumber("string", 1, 3)).toBe(false);
});

test("sends string with number to containsNumber", () => {
  expect(containsNumber("str1ng", 1, 3)).toBe(true);
});

test("sends string with 2 numbers to containsNumber", () => {
  expect(containsNumber("5tr1ng", 1, 3)).toBe(true);
});

test("sends string with 3 numbers to containsNumber", () => {
  expect(containsNumber("5tr1n6", 1, 3)).toBe(true);
});

test("sends string with 4 numbers to containsNumber", () => {
  expect(containsNumber("57r1n6", 1, 3)).toBe(false);
});

test("sends positive even integer in string format to containsNumber", () => {
  expect(containsNumber('2', 1, 3)).toBe(true);
});

test("sends positive odd integer in string format to containsNumber", () => {
  expect(containsNumber('1', 1, 3)).toBe(true);
});

test("sends zero in string format to containsNumber", () => {
  expect(containsNumber('0', 1, 3)).toBe(true);
});

test("sends positive float in string format to containsNumber", () => {
  expect(containsNumber('1.1', 1, 3)).toBe(true);
});

test("sends negative odd integer in string format to containsNumber", () => {
  expect(containsNumber('-1', 1, 3)).toBe(true);
});

test("sends negative even integer in string format to containsNumber", () => {
  expect(containsNumber('-2', 1, 3)).toBe(true);
});

test("sends negative float in string format to containsNumber", () => {
  expect(containsNumber('-1.1', 1, 3)).toBe(true);
});

test("sends '8e5' to containsNumber", () => {
  expect(containsNumber('8e5', 1, 3)).toBe(true);
});

test("sends '0x44' to containsNumber", () => {
  expect(containsNumber('0x44', 1, 3)).toBe(true);
});

test("sends json to containsNumber", () => {
  expect(containsNumber(json, 1, 3)).toBe(false);
});

test("sends invalid json to containsNumber", () => {
  expect(containsNumber(invalidjson, 1, 3)).toBe(false);
});

test("sends Coco!asticot to containsNumber", () => {
  expect(containsNumber("Coco!asticot", 1, 3)).toBe(false);
});

test("sends Coco!astic0t to containsNumber", () => {
  expect(containsNumber("Coco!astic0t", 1, 3)).toBe(true);
});

test("sends Coco!ast1c0t to containsNumber", () => {
  expect(containsNumber("Coco!ast1c0t", 1, 3)).toBe(true);
});

test("sends C0c0!ast1c0t to containsNumber", () => {
  expect(containsNumber("C0c0!ast1c0t", 1, 3)).toBe(false);
});






// with a min value of 2 and a max value of 3



test("sends null to containsNumber", () => {
  expect(containsNumber(null, 2, 3)).toBe(false);
});

test("sends undefined to containsNumber", () => {
  expect(containsNumber(undefined, 2, 3)).toBe(false);
});

// const s1 = Symbol();
// test("sends symbol to containsNumber", () => {
//   expect(containsNumber(s1, 2, 3)).toBe(false);
// });

test("sends true to containsNumber", () => {
  expect(containsNumber(true, 2, 3)).toBe(false);
});

test("sends '+true' to containsNumber", () => {
  expect(containsNumber('+true', 2, 3)).toBe(false);
});

test("sends false to containsNumber", () => {
  expect(containsNumber(false, 2, 3)).toBe(false);
});

test("sends string to containsNumber", () => {
  expect(containsNumber("string", 2, 3)).toBe(false);
});

test("sends string with number to containsNumber", () => {
  expect(containsNumber("str1ng", 2, 3)).toBe(false);
});

test("sends string with 2 numbers to containsNumber", () => {
  expect(containsNumber("5tr1ng", 2, 3)).toBe(true);
});

test("sends string with 3 numbers to containsNumber", () => {
  expect(containsNumber("5tr1n6", 2, 3)).toBe(true);
});

test("sends string with 4 numbers to containsNumber", () => {
  expect(containsNumber("57r1n6", 2, 3)).toBe(false);
});

test("sends positive even integer in string format to containsNumber", () => {
  expect(containsNumber('2', 2, 3)).toBe(false);
});

test("sends positive odd integer in string format to containsNumber", () => {
  expect(containsNumber('1', 2, 3)).toBe(false);
});

test("sends zero in string format to containsNumber", () => {
  expect(containsNumber('0', 2, 3)).toBe(false);
});

test("sends positive float in string format to containsNumber", () => {
  expect(containsNumber('1.1', 2, 3)).toBe(true);
});

test("sends negative odd integer in string format to containsNumber", () => {
  expect(containsNumber('-1', 2, 3)).toBe(false);
});

test("sends negative even integer in string format to containsNumber", () => {
  expect(containsNumber('-2', 2, 3)).toBe(false);
});

test("sends negative float in string format to containsNumber", () => {
  expect(containsNumber('-1.1', 2, 3)).toBe(true);
});

test("sends '8e5' to containsNumber", () => {
  expect(containsNumber('8e5', 2, 3)).toBe(true);
});

test("sends '0x44' to containsNumber", () => {
  expect(containsNumber('0x44', 2, 3)).toBe(true);
});

test("sends json to containsNumber", () => {
  expect(containsNumber(json, 2, 3)).toBe(false);
});

test("sends invalid json to containsNumber", () => {
  expect(containsNumber(invalidjson, 2, 3)).toBe(false);
});

test("sends Coco!asticot to containsNumber", () => {
  expect(containsNumber("Coco!asticot", 2, 3)).toBe(false);
});

test("sends Coco!astic0t to containsNumber", () => {
  expect(containsNumber("Coco!astic0t", 2, 3)).toBe(false);
});

test("sends Coco!ast1c0t to containsNumber", () => {
  expect(containsNumber("Coco!ast1c0t", 2, 3)).toBe(true);
});

test("sends C0c0!ast1c0t to containsNumber", () => {
  expect(containsNumber("C0c0!ast1c0t", 2, 3)).toBe(false);
});
