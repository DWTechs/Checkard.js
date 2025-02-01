import { getTag } from './internal';

function isFunction(f: unknown): f is (...args: unknown[]) => unknown {
  return Boolean(f && getTag(f) === "[object Function]");
}

export {
  isFunction
};
