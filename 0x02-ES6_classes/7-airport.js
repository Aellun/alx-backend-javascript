// Class representing an airport
export default class Airport {
  // Creates an instance of Airport.
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }

    this._name = name;
    this._code = code;
  }

  // Gets the name of the airport
  get name() {
    return this._name;
  }

  // Sets the name of the airport.
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value;
  }

  // Gets the code of the airport
  get code() {
    return this._code;
  }

  // Sets the code of the airport
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = value;
  }

  // Returns the string representation of the airport
  toString() {
    return `[object ${this._code}]`;
  }

  [Symbol.toStringTag]() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
