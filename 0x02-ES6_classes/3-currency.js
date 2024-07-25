export default class Currency {
  constructor(code, name) {
    // Validate the type of code
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }

    // Validate the type of name
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }

    // Assign the attributes to underscore versions
    this._code = code;
    this._name = name;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(n) {
    if (typeof n !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = n;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(c) {
    if (typeof c !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = c;
  }

  // Returns the full currency representation in the format "name (code)
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
