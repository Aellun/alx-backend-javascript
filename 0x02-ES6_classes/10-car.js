// Class representing a Car
export default class Car {
  // Creates an instance of Car
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new TypeError('brand must be a string');
    }
    if (typeof motor !== 'string') {
      throw new TypeError('motor must be a string');
    }
    if (typeof color !== 'string') {
      throw new TypeError('color must be a string');
    }

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Creates a clone of the current Car instance
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  // Gets the brand of the car
  get brand() {
    return this._brand;
  }

  // Sets the brand of the car.
  set brand(value) {
    if (typeof value !== 'string') {
      throw new TypeError('brand must be a string');
    }
    this._brand = value;
  }

  // Gets the motor of the car.
  get motor() {
    return this._motor;
  }

  // Sets the motor of the car.
  set motor(value) {
    if (typeof value !== 'string') {
      throw new TypeError('motor must be a string');
    }
    this._motor = value;
  }

  // Gets the color of the car
  get color() {
    return this._color;
  }

  // Sets the color of the car
  set color(value) {
    if (typeof value !== 'string') {
      throw new TypeError('color must be a string');
    }
    this._color = value;
  }
}
