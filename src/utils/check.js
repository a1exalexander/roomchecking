export const isObject = (el) => el === Object(el);
export const isFunction = (el) => typeof el === 'function';
export const isString = (el) => typeof el === 'string' || el instanceof String;
export const isNumber = (el) => !Number.isNaN(Number(el));
export const isArray = (el) => Array.isArray(el);
export const isDate = (el) => el instanceof Date;
