// Importing the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  // Create three ClassRoom objects with sizes 19, 20, and 34
  const class1 = new ClassRoom(19);
  const class2 = new ClassRoom(20);
  const class3 = new ClassRoom(34);

  // An array to hold the ClassRoom objects
  const newList = [class1, class2, class3];

  // Return the array of ClassRoom objects
  return newList;
}
