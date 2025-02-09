import { normalizeEmail } from "../../dist/ch";

test("sends null to normalizeEmail", () => {
  expect(normalizeEmail(null)).toBe(false);
});

test("sends undefined to normalizeEmail", () => {
  expect(normalizeEmail(undefined)).toBe(false);
});

const s1 = Symbol();
test("sends symbol to normalizeEmail", () => {
  expect(normalizeEmail(s1)).toBe(false);
});

test("sends true to normalizeEmail", () => {
  expect(normalizeEmail(true)).toBe(false);
});

test("sends false to normalizeEmail", () => {
  expect(normalizeEmail(false)).toBe(false);
});

test("sends string to normalizeEmail", () => {
  expect(normalizeEmail("string")).toBe(false);
});

test("sends positive even integer to normalizeEmail", () => {
  expect(normalizeEmail(2)).toBe(false);
});

test("sends positive odd integer to normalizeEmail", () => {
  expect(normalizeEmail(1)).toBe(false);
});

test("sends zero to normalizeEmail", () => {
  expect(normalizeEmail(0)).toBe(false);
});

test("sends positive float to normalizeEmail", () => {
  expect(normalizeEmail(1.1)).toBe(false);
});

test("sends negative odd integer to normalizeEmail", () => {
  expect(normalizeEmail(-1)).toBe(false);
});

test("sends negative even integer to normalizeEmail", () => {
  expect(normalizeEmail(-2)).toBe(false);
});

test("sends negative float to normalizeEmail", () => {
  expect(normalizeEmail(-1.1)).toBe(false);
});

test("sends object to normalizeEmail", () => {
  expect(normalizeEmail({})).toBe(false);
});

test("sends empty array to normalizeEmail", () => {
  expect(normalizeEmail([])).toBe(false);
});

test("sends array of 1 integer to normalizeEmail", () => {
  expect(normalizeEmail([2])).toBe(false);
});

test("sends array of 2 integers to normalizeEmail", () => {
  expect(normalizeEmail([2,1])).toBe(false);
});

test("sends array of 1 integer to normalizeEmail", () => {
  expect(normalizeEmail([2.1])).toBe(false);
});

test("sends array of 2 integers to normalizeEmail", () => {
  expect(normalizeEmail([2.1,1.1])).toBe(false);
});

test("sends array to normalizeEmail", () => {
  expect(normalizeEmail(["white", "grey", "black"])).toBe(false);
});

const json = `{
  "actor": {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;

test("sends json to normalizeEmail", () => {
  expect(normalizeEmail(json)).toBe(false);
});

const invalidjson = `{
  "actor: {
    "name": "Tom Cruise",
    "age": 56
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;

test("sends invalid json to normalizeEmail", () => {
  expect(normalizeEmail(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to normalizeEmail", () => {
  expect(normalizeEmail(testFunction)).toBe(false);
});

const para = document.createElement("p");

test("sends htmlElement to normalizeEmail", () => {
  expect(normalizeEmail(para)).toBe(false);
});

const node = document.createTextNode("new node");

test("sends node to normalizeEmail", () => {
  expect(normalizeEmail(node)).toBe(false);
});

test("sends regex to normalizeEmail", () => {
  expect(normalizeEmail(/ab+c/i)).toBe(false);
});

test("sends abc-@mail.com to normalizeEmail", () => {
  expect(normalizeEmail("abc-@mail.com")).toBe(false);
});

test("sends abc.@mail.com to normalizeEmail", () => {
  expect(normalizeEmail("abc.@mail.com")).toBe(false);
});

test("sends abc..def@mail.com to normalizeEmail", () => {
  expect(normalizeEmail("abc..def@mail.com")).toBe(false);
});

test("sends .abc@mail.com to normalizeEmail", () => {
  expect(normalizeEmail(".abc@mail.com")).toBe(false);
});

test("sends abc#def@mail.com to normalizeEmail", () => {
  expect(normalizeEmail("abc#def@mail.com")).toBe(false);
});

test("sends abc.def@mail.c to normalizeEmail", () => {
  expect(normalizeEmail("abc.def@mail.c")).toBe(false);
});

test("sends abc.def@mail#archive.com to normalizeEmail", () => {
  expect(normalizeEmail("abc.def@mail#archive.com")).toBe(false);
});

test("sends abc.def@mail to normalizeEmail", () => {
  expect(normalizeEmail("abc.def@mail")).toBe(false);
});

test("sends abc.def@mail..com to normalizeEmail", () => {
  expect(normalizeEmail("abc.def@mail..com")).toBe(false);
});

test("sends abc-d@mail.com to normalizeEmail", () => {
  expect(normalizeEmail("abc-d@mail.com")).toBe("abc-d@mail.com");
});

test("sends abc.def@mail.com to normalizeEmail", () => {
  expect(normalizeEmail("abc.def@mail.com")).toBe("abc.def@mail.com");
});

test("sends abc@mail.com to normalizeEmail", () => {
  expect(normalizeEmail("abc@mail.com")).toBe("abc@mail.com");
});

test("sends abc_def@mail.com to normalizeEmail", () => {
  expect(normalizeEmail("abc_def@mail.com")).toBe("abc_def@mail.com");
});

test("sends abc.def@mail.cc to normalizeEmail", () => {
  expect(normalizeEmail("abc.def@mail.cc")).toBe("abc.def@mail.cc");
});

test("sends abc.def@mail-archive.com to normalizeEmail", () => {
  expect(normalizeEmail("abc.def@mail-archive.com")).toBe("abc.def@mail-archive.com");
});

test("sends abc.def@mail.org to normalizeEmail", () => {
  expect(normalizeEmail("abc.def@mail.org")).toBe("abc.def@mail.org");
});

test("sends abc.def@mail.com to normalizeEmail", () => {
  expect(normalizeEmail("abc.def@mail.com")).toBe("abc.def@mail.com");
});


test("sends aBc-d@Mail.com to normalizeEmail", () => {
  expect(normalizeEmail("aBc-d@Mail.com")).toBe("abc-d@mail.com");
});

test("sends abc.Def@mail.cOm to normalizeEmail", () => {
  expect(normalizeEmail("abc.Def@mail.cOm")).toBe("abc.def@mail.com");
});

test("sends Abc@Mail.coM to normalizeEmail", () => {
  expect(normalizeEmail("Abc@Mail.coM")).toBe("abc@mail.com");
});

test("sends abc_Def@mAil.com to normalizeEmail", () => {
  expect(normalizeEmail("abc_Def@mAil.com")).toBe("abc_def@mail.com");
});

test("sends abC.deF@mail.cc to normalizeEmail", () => {
  expect(normalizeEmail("abC.deF@mail.cc")).toBe("abc.def@mail.cc");
});

test("sends abc.def@maiL-Archive.com to normalizeEmail", () => {
  expect(normalizeEmail("abc.def@maiL-Archive.com")).toBe("abc.def@mail-archive.com");
});

test("sends ABF.DEF@MAIL-TOTO.COM to normalizeEmail", () => {
  expect(normalizeEmail("ABF.DEF@MAIL-TOTO.COM")).toBe("abf.def@mail-toto.com");
});
