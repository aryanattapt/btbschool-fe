export const removeAtIndex = (array, index) => {
  if (index < 0 || index >= array.length) {
    return array; // Return the original array if index is out of bounds
  }
  return [...array.slice(0, index), ...array.slice(index + 1)];
};
