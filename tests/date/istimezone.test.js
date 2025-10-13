import { isTimeZone } from "../../dist/ch";

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

test("sends NaN to isTimeZone", () => {
  expect(isTimeZone(Number.NaN)).toBe(false);
});

test("sends null to isTimeZone", () => {
  expect(isTimeZone(null)).toBe(false);
});

test("sends undefined to isTimeZone", () => {
  expect(isTimeZone(undefined)).toBe(false);
});

test("sends symbol to isTimeZone", () => {
  expect(isTimeZone(s1)).toBe(false);
});

test("sends true to isTimeZone", () => {
  expect(isTimeZone(true)).toBe(false);
});

test("sends false to isTimeZone", () => {
  expect(isTimeZone(false)).toBe(false);
});

test("sends plain string to isTimeZone", () => {
  expect(isTimeZone("string")).toBe(false);
});

test("sends empty string to isTimeZone", () => {
  expect(isTimeZone("")).toBe(false);
});

test("sends positive even integer to isTimeZone", () => {
  expect(isTimeZone(2)).toBe(false);
});

test("sends positive odd integer to isTimeZone", () => {
  expect(isTimeZone(1)).toBe(false);
});

test("sends zero to isTimeZone", () => {
  expect(isTimeZone(0)).toBe(false);
});

test("sends positive float to isTimeZone", () => {
  expect(isTimeZone(1.1)).toBe(false);
});

test("sends negative odd integer to isTimeZone", () => {
  expect(isTimeZone(-1)).toBe(false);
});

test("sends negative even integer to isTimeZone", () => {
  expect(isTimeZone(-2)).toBe(false);
});

test("sends negative float to isTimeZone", () => {
  expect(isTimeZone(-1.1)).toBe(false);
});

test("sends empty object to isTimeZone", () => {
  expect(isTimeZone({})).toBe(false);
});

test("sends empty array to isTimeZone", () => {
  expect(isTimeZone([])).toBe(false);
});

test("sends object to isTimeZone", () => {
  expect(isTimeZone({toto: 3})).toBe(false);
});

test("sends array to isTimeZone", () => {
  expect(isTimeZone(['toto', 3])).toBe(false);
});

test("sends json to isTimeZone", () => {
  expect(isTimeZone(json)).toBe(false);
});

test("sends invalid json to isTimeZone", () => {
  expect(isTimeZone(invalidjson)).toBe(false);
});

test("sends date object to isTimeZone", () => {
  expect(isTimeZone(date)).toBe(false);
});

test("sends function to isTimeZone", () => {
  expect(isTimeZone(testFunction)).toBe(false);
});

test("sends HTML element to isTimeZone", () => {
  expect(isTimeZone(para)).toBe(false);
});

test("sends HTML node to isTimeZone", () => {
  expect(isTimeZone(node)).toBe(false);
});

// Invalid timezone formats
test("sends lowercase timezone to isTimeZone", () => {
  expect(isTimeZone("europe/paris")).toBe(false);
});

test("sends all uppercase timezone to isTimeZone", () => {
  expect(isTimeZone("EUROPE/PARIS")).toBe(false);
});

test("sends timezone without slash to isTimeZone", () => {
  expect(isTimeZone("EuropeParis")).toBe(false);
});

test("sends timezone with underscore instead of slash to isTimeZone", () => {
  expect(isTimeZone("Europe_Paris")).toBe(false);
});

test("sends timezone with spaces to isTimeZone", () => {
  expect(isTimeZone("Europe Paris")).toBe(false);
});

test("sends timezone with numbers to isTimeZone", () => {
  expect(isTimeZone("Europe/Paris1")).toBe(false);
});

test("sends timezone with special characters to isTimeZone", () => {
  expect(isTimeZone("Europe/Par!s")).toBe(false);
});

test("sends timezone with only region to isTimeZone", () => {
  expect(isTimeZone("Europe")).toBe(false);
});

test("sends timezone with only city to isTimeZone", () => {
  expect(isTimeZone("Paris")).toBe(false);
});

test("sends timezone with trailing slash to isTimeZone", () => {
  expect(isTimeZone("Europe/Paris/")).toBe(false);
});

test("sends timezone with leading slash to isTimeZone", () => {
  expect(isTimeZone("/Europe/Paris")).toBe(false);
});

test("sends timezone with double slash to isTimeZone", () => {
  expect(isTimeZone("Europe//Paris")).toBe(false);
});

test("sends timezone with lowercase region to isTimeZone", () => {
  expect(isTimeZone("europe/Paris")).toBe(false);
});

test("sends timezone with lowercase city to isTimeZone", () => {
  expect(isTimeZone("Europe/paris")).toBe(false);
});

test("sends timezone with all lowercase to isTimeZone", () => {
  expect(isTimeZone("america/new_york")).toBe(false);
});

test("sends timezone with uppercase city to isTimeZone", () => {
  expect(isTimeZone("Europe/PARIS")).toBe(false);
});

test("sends timezone with hyphen instead of underscore to isTimeZone", () => {
  expect(isTimeZone("America/New-York")).toBe(false);
});

test("sends timezone with space instead of underscore to isTimeZone", () => {
  expect(isTimeZone("America/New York")).toBe(false);
});

test("sends timezone with wrong capitalization in subregion to isTimeZone", () => {
  expect(isTimeZone("America/north_Dakota/Center")).toBe(false);
});

test("sends timezone with extra slashes to isTimeZone", () => {
  expect(isTimeZone("America/North_Dakota/Center/Extra")).toBe(false);
});

test("sends abbreviated timezone to isTimeZone", () => {
  expect(isTimeZone("EST")).toBe(false);
});

test("sends UTC offset to isTimeZone", () => {
  expect(isTimeZone("UTC+1")).toBe(false);
});

test("sends GMT offset to isTimeZone", () => {
  expect(isTimeZone("GMT-5")).toBe(false);
});

// Valid IANA timezone formats
test("sends valid Europe/Paris timezone to isTimeZone", () => {
  expect(isTimeZone("Europe/Paris")).toBe(true);
});

test("sends valid America/New_York timezone to isTimeZone", () => {
  expect(isTimeZone("America/New_York")).toBe(true);
});

test("sends valid Asia/Tokyo timezone to isTimeZone", () => {
  expect(isTimeZone("Asia/Tokyo")).toBe(true);
});

test("sends valid America/Los_Angeles timezone to isTimeZone", () => {
  expect(isTimeZone("America/Los_Angeles")).toBe(true);
});

test("sends valid Europe/London timezone to isTimeZone", () => {
  expect(isTimeZone("Europe/London")).toBe(true);
});

test("sends valid Asia/Shanghai timezone to isTimeZone", () => {
  expect(isTimeZone("Asia/Shanghai")).toBe(true);
});

test("sends valid America/Chicago timezone to isTimeZone", () => {
  expect(isTimeZone("America/Chicago")).toBe(true);
});

test("sends valid Australia/Sydney timezone to isTimeZone", () => {
  expect(isTimeZone("Australia/Sydney")).toBe(true);
});

test("sends valid Pacific/Auckland timezone to isTimeZone", () => {
  expect(isTimeZone("Pacific/Auckland")).toBe(true);
});

test("sends valid Africa/Cairo timezone to isTimeZone", () => {
  expect(isTimeZone("Africa/Cairo")).toBe(true);
});

test("sends valid Indian/Maldives timezone to isTimeZone", () => {
  expect(isTimeZone("Indian/Maldives")).toBe(true);
});

test("sends valid Atlantic/Reykjavik timezone to isTimeZone", () => {
  expect(isTimeZone("Atlantic/Reykjavik")).toBe(true);
});

test("sends valid Europe/Berlin timezone to isTimeZone", () => {
  expect(isTimeZone("Europe/Berlin")).toBe(true);
});

test("sends valid Asia/Dubai timezone to isTimeZone", () => {
  expect(isTimeZone("Asia/Dubai")).toBe(true);
});

test("sends valid America/Sao_Paulo timezone to isTimeZone", () => {
  expect(isTimeZone("America/Sao_Paulo")).toBe(true);
});

test("sends valid Europe/Moscow timezone to isTimeZone", () => {
  expect(isTimeZone("Europe/Moscow")).toBe(true);
});

test("sends valid Asia/Kolkata timezone to isTimeZone", () => {
  expect(isTimeZone("Asia/Kolkata")).toBe(true);
});

test("sends valid America/Mexico_City timezone to isTimeZone", () => {
  expect(isTimeZone("America/Mexico_City")).toBe(true);
});

test("sends valid Pacific/Honolulu timezone to isTimeZone", () => {
  expect(isTimeZone("Pacific/Honolulu")).toBe(true);
});

test("sends valid Europe/Istanbul timezone to isTimeZone", () => {
  expect(isTimeZone("Europe/Istanbul")).toBe(true);
});

// Valid timezones with subregions
test("sends valid America/North_Dakota/Center timezone to isTimeZone", () => {
  expect(isTimeZone("America/North_Dakota/Center")).toBe(true);
});

test("sends valid America/Indiana/Indianapolis timezone to isTimeZone", () => {
  expect(isTimeZone("America/Indiana/Indianapolis")).toBe(true);
});

test("sends valid America/Kentucky/Louisville timezone to isTimeZone", () => {
  expect(isTimeZone("America/Kentucky/Louisville")).toBe(true);
});

test("sends valid America/Argentina/Buenos_Aires timezone to isTimeZone", () => {
  expect(isTimeZone("America/Argentina/Buenos_Aires")).toBe(true);
});

test("sends valid America/North_Dakota/New_Salem timezone to isTimeZone", () => {
  expect(isTimeZone("America/North_Dakota/New_Salem")).toBe(true);
});
