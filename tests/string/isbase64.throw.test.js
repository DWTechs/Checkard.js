import { isBase64 } from "../../dist/ch";


function testThrows(input, urlEncoded = false) {
  expect(() => isBase64(input, urlEncoded, true)).toThrow();
}

describe("isBase64 with throwErr = true", () => {
  test("throws on undefined", () => {
    testThrows(undefined);
    testThrows(undefined, true);
  });

  test("throws on null", () => {
    testThrows(null);
    testThrows(null, true);
  });

  test("throws on false", () => {
    testThrows(false);
    testThrows(false, true);
  });

  test("throws on empty string", () => {
    testThrows("");
    testThrows("", true);
  });

  test("throws on empty array", () => {
    testThrows([]);
    testThrows([], true);
  });

  test("throws on object", () => {
    testThrows({});
    testThrows({}, true);
  });

  test("throws on number", () => {
    testThrows(1.23);
    testThrows(1.23, true);
  });

  test("throws on invalid base64 string", () => {
    testThrows("not_base64");
    testThrows("not_base64!", true);
  });
});
