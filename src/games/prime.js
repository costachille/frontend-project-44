import gameEngine from '../gameEngine.js';
import { getRandomNumber } from '../utility.js';

const ruleOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  let divider = 2;

  while (divider <= (number / 2)) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }

  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => gameEngine(ruleOfTheGame, getQuestionAndAnswer);
