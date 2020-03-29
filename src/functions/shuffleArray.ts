/**
 * The modern version of the Fisher–Yates shuffle,
 * designed for computer use, rewritten in typescript by mwah
 */
export const shuffleArray = <T extends any[]>(arrayRef: T): T => {
  /**
   * Duplicate the array since arrays are passed by reference,
   * mutating data is gross.
   */
  const array = JSON.parse(JSON.stringify(arrayRef));

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
