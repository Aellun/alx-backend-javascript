// Class representing a Holberton class
export default class HolbertonClass {
  // Creates an instance of HolbertonClass
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  // Returns the size of the class when cast to a number
  valueOf() {
    return this._size;
  }

  // Returns the location of the class when cast to a string
  toString() {
    return this._location;
  }
}
