import { isEmail } from './string';

/**
 * A function to capitalize the first letter of each word in a string.
 *
 * @param {string} s - The input string to capitalize.
 * @param {boolean} everyWords - A flag to indicate whether to capitalize every word or just the first letter of the whole string.
 * @return {string} The string with the first letter of each word capitalized.
 */
function ucfirst(s: string, everyWords = true): string {
  const newStr = s.toLowerCase();
  if (everyWords) {
    const words = newStr.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }
  return newStr.charAt(0).toUpperCase() + newStr.slice(1);
}

/**
 * Returns a normalized nickname for a user.
 *
 * If the nickname is not given, the function will create a nickname
 * based on the first letter of the first name and the last name.
 *
 * nickname accepts a-z - and _ characters
 * 
 * @param {string} nickname - The nickname of the user.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @return {string | false} The normalized nickname.
 */
function normalizeNickname(nickname: string, firstName: string, lastName: string): string | false {
  return (nickname || firstName && lastName) ? createNickname(nickname, firstName, lastName) : false;
}

/**
 * Normalizes a first name by capitalizing the first letter of each word.
 *
 * @param {string} s - The first name to normalize.
 * @return {string} The normalized first name.
 */
function normalizeName(s: string): string | false {
  return s ? ucfirst(s, true) : false;
}

/**
 * A function to normalize an email address.
 *
 * If the string is not a valid email address, the function will return false.
 *
 * @param {string} s - The email address to normalize.
 * @return {string|false} The normalized email address or false if the
 * string is not a valid email address.
 */
function normalizeEmail(s: string): string | false {
  return (s && isEmail(s)) ? s.toLowerCase() : false; 
}

/**
 * Creates a normalized nickname for a user.
 *
 * If no nickname is given, the function will create a nickname
 * based on the first letter of the first name and the last name.
 *
 * @param {string} nickname - The nickname of the user.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @return {string} The normalized nickname.
 */
function createNickname(nickname: string, firstName: string, lastName: string): string | false {
  const n = nickname || firstName[0] + lastName; // first letter of first name + last name
  return n.toLowerCase()
          .normalize("NFD") // remove accents
          .replace(/\p{Diacritic}|[^a-zA-Z\s_-]/gu, "") || false; // remove diacritics and any non alpha characters exceot - and _
}

export {
  ucfirst,
  normalizeNickname,
  normalizeName,
  normalizeEmail,
};
