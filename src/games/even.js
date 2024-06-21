import gameEngine from '../gameEngine.js';
import { getRandomNumber } from '../utility.js';

const ruleOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  gameEngine(ruleOfTheGame, getQuestionAndAnswer);
};
