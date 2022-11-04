export const randomNumber = (start: number, end: number) => {
  const randomFloat = Math.random() * (end - start + 1);
  return Math.floor(randomFloat);
};

export const randomElement = (array: Array<any>) => {
  const len = array.length;
  if (len < 1) return;
  return array[randomNumber(0, len - 1)];
};
