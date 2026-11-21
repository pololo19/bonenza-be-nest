export const getRandomNumber = (start: number = 1, end: number = 100) => {
  return Math.floor(Math.random() * end) + start;
};

export const getRandomItemFromArray = (array: any[]) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
