import gameEngine from '../src/gameEngine';
import { getRandomNumber, randomEquation } from '../src/utility.js';

const rule = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
    const equation = randomEquation(getRandomNumber(0, 100), getRandomNumber(0, 100));
    return [equation.equation, equation.result];
};

export default () => {
    gameEngine(rule, getQuestionAndAnswer);
};
