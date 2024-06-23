import gameEngine from '../gameEngine.js';
import { getRandomNumber } from '../utility.js';

const rule = 'What is the result of the expression?';

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

const getQuestionAndAnswer = () => {
  const equation = randomEquation(getRandomNumber(0, 100), getRandomNumber(0, 100));
  return [equation.equation, equation.result];
};

export default () => {
  gameEngine(rule, getQuestionAndAnswer);
};
