
type Comparator = '='|'<'|'>'|'<='|'>='|'!='|'!0'|'0';

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
