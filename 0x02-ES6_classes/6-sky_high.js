import Building from './5-building';

// Class representing a sky high building.

export default class SkyHighBuilding extends Building {
  // Creates an instance of SkyHighBuilding.
  constructor(sqft, floors) {
    super(sqft);

    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }

    this._floors = floors;
  }

  // Gets the number of floors.
  get floors() {
    return this._floors;
  }

  // Sets the number of floors.
  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = value;
  }

  // Provides the evacuation warning message
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
