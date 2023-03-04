'use strict';

const countTypesInArray = (arr) => {
  const hash = {};
  for(const item of arr) {
    const key = typeof(item);
    const value = hash.hasOwnProperty(key) ? ++hash[key] : 1;
    hash[key] = value;
  }
  return hash;
};

module.exports = { countTypesInArray };
