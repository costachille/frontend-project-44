const getRandomNumber = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

const randomEquation = (num1, num2) => {
  const arrOfSymbols = ['+', '-', '*'];
  const randomSymbol = arrOfSymbols[Math.floor(Math.random() * arrOfSymbols.length)];

  if (randomSymbol === '+') {
    return {
      equation: `${num1} + ${num2}`,
      result: `${num1 + num2}`,
    };
  }

  if (randomSymbol === '-') {
    return {
      equation: `${num1} - ${num2}`,
      result: `${num1 - num2}`,
    };
  }

  return {
    equation: `${num1} * ${num2}`,
    result: `${num1 * num2}`,
  };
};

export { getRandomNumber, randomEquation };
