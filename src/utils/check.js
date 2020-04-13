export const isObject = (el) => el === Object(el);
export const isFunction = (el) => typeof el === 'function';
export const isString = (el) => typeof el === 'string' || el instanceof String;
export const isNumber = (el) => !isNaN(el);
export const isArray = (el) => Array.isArray(el);
export const isDate = (el) => el instanceof Date;
export const isBoolean = (el) => typeof el === 'boolean';

const $hasOwnProperty = Object.prototype.hasOwnProperty;

export const has = (obj, key) => {
  if (obj !== Object(obj)) return false;
  return $hasOwnProperty.call(obj, key);
};
