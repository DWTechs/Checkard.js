import { isObject } from './structural';
import { isArray } from './array';

function isCustomType(val: any, customType: any[] | Record<string, any> ): a is customType {
  
  if (isObject(customType))
    return Object.keys(customType).includes(val);
  if (isArray(customType, '>', 0))
    return customType.includes(val);

  return false;
  
}

export {
  isCustomType
};
