import { getTag } from './internal';

function isFunction(func: unknown): func is (...args: unknown[]) => unknown {
  return Boolean(func && getTag(func) === "[object Function]");
}

export {
  isFunction
};
