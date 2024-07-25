// Executes the provided mathFunction and handles its result or error.

export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Try to execute the mathFunction and push the result to the queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // If an error occurs, push the error message to the queue
    queue.push(`Error: ${error.message}`);
  } finally {
    // Regardless of the outcome, push the final message to the queue
    queue.push('Guardrail was processed');
  }

  return queue;
}
