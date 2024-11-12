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
  expect(result).toBe('john_doe');
});

it('should return the nickname with numeric characters removed', () => {
  const nickname = 'J0hn-Doe3';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jhn-doe');
});

it('should return false if the nickname is string typed integer', () => {
  const nickname = '123';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe(false);
});

it('should delete ! character', () => {
  const nickname = 'j!doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete § character', () => {
  const nickname = 'j§doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete : character', () => {
  const nickname = 'j:doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete / character', () => {
  const nickname = 'j/doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete . character', () => {
  const nickname = 'j.doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete ; character', () => {
  const nickname = 'j;doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete ? character', () => {
  const nickname = 'j?doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete , character', () => {
  const nickname = 'j,doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete " character', () => {
  const nickname = 'j"doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete # character', () => {
  const nickname = 'j#doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete ~ character', () => {
  const nickname = 'j~doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete & character', () => {
  const nickname = 'j&doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it("should delete ' character", () => {
  const nickname = "j'doe";
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete { character', () => {
  const nickname = 'j{doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete ( character', () => {
  const nickname = 'j(doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete [ character', () => {
  const nickname = 'j[doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete | character', () => {
  const nickname = 'j|doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete ` character', () => {
  const nickname = 'j`doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete \ character', () => {
  const nickname = 'j\doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete ^ character', () => {
  const nickname = 'j^doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete @ character', () => {
  const nickname = 'j@doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete ) character', () => {
  const nickname = 'j)doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete ] character', () => {
  const nickname = 'j]doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete = character', () => {
  const nickname = 'j=doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete + character', () => {
  const nickname = 'j+doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete } character', () => {
  const nickname = 'j}doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete ¨ character', () => {
  const nickname = 'j¨doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete ^ character', () => {
  const nickname = 'j^doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete $ character', () => {
  const nickname = 'j$doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete £ character', () => {
  const nickname = 'j£doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete € character', () => {
  const nickname = 'j€doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete ¤ character', () => {
  const nickname = 'j¤doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete % character', () => {
  const nickname = 'j%doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete µ character', () => {
  const nickname = 'jµdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete * character', () => {
  const nickname = 'j*doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete < character', () => {
  const nickname = 'j<doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should delete > character', () => {
  const nickname = 'j>doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jdoe');
});

it('should replace đ character with d', () => {
  const nickname = 'jđdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jddoe');
});

it('should replace ∂ character with d', () => {
  const nickname = 'j∂doe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jddoe');
});

it('should replace é character with e', () => {
  const nickname = 'jédoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jedoe');
});

it('should replace è character with e', () => {
  const nickname = 'jèdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jedoe');
});

it('should replace ê character with e', () => {
  const nickname = 'jêdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jedoe');
});

it('should replace ç character with c', () => {
  const nickname = 'jçdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jcdoe');
});

it('should replace á character with a', () => {
  const nickname = 'jádoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jadoe');
});

it('should replace à character with a', () => {
  const nickname = 'jàdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jadoe');
});

it('should replace ã character with a', () => {
  const nickname = 'jãdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jadoe');
});

it('should replace â character with a', () => {
  const nickname = 'jâdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jadoe');
});

it('should replace ª character with a', () => {
  const nickname = 'jªdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jadoe');
});

it('should replace ô character with o', () => {
  const nickname = 'jôdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jodoe');
});

it('should replace ó character with o', () => {
  const nickname = 'jódoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jodoe');
});

it('should replace ò character with o', () => {
  const nickname = 'jòdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jodoe');
});

it('should replace õ character with o', () => {
  const nickname = 'jõdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jodoe');
});

it('should replace ú character with u', () => {
  const nickname = 'júdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('judoe');
});

it('should replace ù character with u', () => {
  const nickname = 'jùdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('judoe');
});

it('should replace û character with u', () => {
  const nickname = 'jûdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('judoe');
});

it('should replace ü character with u', () => {
  const nickname = 'jüdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('judoe');
});

it('should replace ÿ character with y', () => {
  const nickname = 'jÿdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jydoe');
});

it('should replace ý character with y', () => {
  const nickname = 'jýdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jydoe');
});

it('should replace ŷ character with y', () => {
  const nickname = 'jŷdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jydoe');
});

it('should replace ñ character with n', () => {
  const nickname = 'jñdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jndoe');
});

it('should replace ß character with ss', () => {
  const nickname = 'jßdoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jssdoe');
});

it('should replace æ character with ae', () => {
  const nickname = 'jædoe';
  const result = normalizeNickname(nickname, '', '');
  expect(result).toBe('jaedoe');
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