import gameEngine from "../gameEngine.js";
import { getRandomNumber } from "../utility.js";

const ruleOfTheGame = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (startProgression, stepProgression) => {
    const progressions = [];
    for (let i = 0; i < progressionLength; i += 1) {
        const value = startProgression + stepProgression * i;
        progressions.push(value);     
    }
    return progressions;
};

const getQuestionAndAnswer = () => {
    const minStep = 2;
    const maxStep = 10;
    const start = getRandomNumber(1, 100);
    const step = getRandomNumber(minStep, maxStep);
    const progression = getProgression(start, step);
    const hiddenFirstNumber = 0;
    const hiddenLastNumber = progressionLength - 1;
    const indexOfHiddenNumber = getRandomNumber(hiddenFirstNumber, hiddenLastNumber);
    const answer = String(progression[indexOfHiddenNumber]);
    progression[indexOfHiddenNumber] = '..';
    const question = progression.join(' ');
    return [question, answer];
};

export default () => gameEngine(ruleOfTheGame, getQuestionAndAnswer);