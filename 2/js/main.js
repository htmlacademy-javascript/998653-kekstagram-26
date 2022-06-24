const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const result = getRandom(17, 34);
console.log(result);

//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.

const checkMaxLength = (string, MAX_LENGTH_COMMENT) => {
  if (string > MAX_LENGTH_COMMENT) {
    return false;
  }
  return true;
};

const length = checkMaxLength(16, 15);
console.log(length);

// или втрой вариант

const getMaxLength = (min, max) => {
  return min < max ? true : false;
};

const lengthTernar = getMaxLength(123, 78);
console.log(lengthTernar);
