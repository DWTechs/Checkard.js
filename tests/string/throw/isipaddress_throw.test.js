import { isIpAddress } from "../../../dist/ch";

describe("isIpAddress throwErr behavior", () => {
  it("throws error when NaN is not a valid IP address", () => {
    expect(() => isIpAddress(NaN, true)).toThrow();
  });

  it("throws error when null is not a valid IP address", () => {
    expect(() => isIpAddress(null, true)).toThrow();
  });

  it("throws error when undefined is not a valid IP address", () => {
    expect(() => isIpAddress(undefined, true)).toThrow();
  });

  it("throws error when boolean true is not a valid IP address", () => {
    expect(() => isIpAddress(true, true)).toThrow();
  });

  it("throws error when boolean false is not a valid IP address", () => {
    expect(() => isIpAddress(false, true)).toThrow();
  });

  it("throws error when number is not a valid IP address", () => {
    expect(() => isIpAddress(42, true)).toThrow();
  });

  it("throws error when object is not a valid IP address", () => {
    expect(() => isIpAddress({}, true)).toThrow();
  });

  it("throws error when array is not a valid IP address", () => {
    expect(() => isIpAddress([1, 2, 3], true)).toThrow();
  });

  it("throws error when symbol is not a valid IP address", () => {
    expect(() => isIpAddress(Symbol("test"), true)).toThrow();
  });

  it("throws error when empty string is not a valid IP address", () => {
    expect(() => isIpAddress("", true)).toThrow();
  });

  it("throws error when invalid IP format is not valid", () => {
    expect(() => isIpAddress("not.an.ip.address", true)).toThrow();
  });

  it("throws error when IP with out-of-range values is not valid", () => {
    expect(() => isIpAddress("256.256.256.256", true)).toThrow();
  });

  it("throws error when incomplete IP is not valid", () => {
    expect(() => isIpAddress("192.168.1", true)).toThrow();
  });

  it("throws error when IP with too many octets is not valid", () => {
    expect(() => isIpAddress("192.168.1.1.1", true)).toThrow();
  });
});