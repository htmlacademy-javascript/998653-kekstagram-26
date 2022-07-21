const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElements = (element) =>
  element[getRandomPositiveInteger(0, element.length - 1)];

console.log(getRandomPositiveInteger(4,14));

export {getRandomPositiveInteger};
export {getRandomArrayElements};
