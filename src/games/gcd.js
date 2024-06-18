import gameEngine from "../gameEngine.js";
import { getRandomNumber } from "../utility.js";

const ruleOfTheGame = 'Find the greatest common divisor of given numbers.';

const answerGcd = (x, y) => {
    if (!y) {
        return x;
    }

    return answerGcd(y, x % y);
};

const getQuestionAndAnswer = () => {
    const question = [getRandomNumber(0, 100), getRandomNumber(0, 100)];
    const answer = answerGcd(...question).toString();
    return [question.join(' '), answer];
};

export default () => {
    gameEngine(ruleOfTheGame, getQuestionAndAnswer);
};