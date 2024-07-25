/* eslint-disable class-methods-use-this */
import Car from './10-car';

// Class representing an Electric Vehicle (EV) Car
export default class EVCar extends Car {
  // Creates an instance of EVCar
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Creates a clone of the current EVCar instance, but returns an instance of Ca
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
