/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
//  use ES6’s for...of loop and replace var with let

export default function appendToEachArrayValue(array, appendString) {
  const myarray = [];
  for (const item of array) {
    myarray.push(appendString + item);
  }

  return myarray;
}
