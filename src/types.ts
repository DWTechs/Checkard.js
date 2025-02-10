
type Comparator = '='|'<'|'>'|'<='|'>='|'!='|'empty'|'!empty';

type PasswordOptions = {
  lowerCase: boolean,
  upperCase: boolean,
  number: boolean,
  specialCharacter: boolean,
  maxLength: number,
  minLength: number
}

export type {
  Comparator,
  PasswordOptions
};
