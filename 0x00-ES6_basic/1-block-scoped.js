/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
export default function taskBlock(trueOrFalse) {
  // Variables declared with let to limit their scope
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // New variables declared within the block scope using const
    const task = true;
    const task2 = false;
  }
  return [task, task2];
}
