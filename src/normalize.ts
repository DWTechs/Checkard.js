
import { isString } from './primitive';
import { isEmail } from './string';


/**
 * A function to capitalize the first letter of each word in a string.
 *
 * @param {string} str - The input string to capitalize.
 * @param {boolean} everyWords - A flag to indicate whether to capitalize every word or just the first letter of the whole string.
 * @return {string} The string with the first letter of each word capitalized.
 */
function ucfirst(str: any, everyWords: boolean = true): any {
  if (isString(str, true)) {
    const newStr = str.toLowerCase();

    if (everyWords) {
      const words = newStr.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
      return words.join(" ");
    }
    return newStr.charAt(0).toUpperCase() + newStr.slice(1);
  }
  return str;
}

/**
 * Returns a normalized nickname for a user.
 *
 * If the nickname is not given, the function will create a nickname
 * based on the first letter of the first name and the last name.
 *
 * @param {string} nickname - The nickname of the user.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @return {string} The normalized nickname.
 */
function normalizeNickname(nickname: any, firstName: any, lastName: any): string | false {
  return isString(nickname, true) ? nickname.toLowerCase() : (isString(firstName, true) && isString(lastName, true)) ? createNickname(firstName, lastName) : false;
}

/**
 * Normalizes a first name by capitalizing the first letter of each word.
 *
 * @param {string} str - The first name to normalize.
 * @return {string} The normalized first name.
 */
function normalizeName(str: any): string {
  return ucfirst(str, true);
}

function normalizeEmail(str: any): string | false {
  return isEmail(str) ? str.toLowerCase() : false; 
}

/**
 * Creates a nickname for a user based on the first letter of the first name and the last name.
 *
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @return {string} The created nickname
 */
function createNickname(firstName: string, lastName: string): string {
  return (firstName[0] + lastName) // first letter of first name + last name
    .toLowerCase()
    .normalize("NFD") // remove accents
    .replace(/\p{Diacritic}/gu, ""); // remove diacritics
}

export {
  ucfirst,
  normalizeNickname,
  normalizeName,
  normalizeEmail,
};
