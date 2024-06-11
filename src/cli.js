import readlineSync from '../node_modules/.package-lock';

export const askNameAndGreet = () => {
    const name = readlineSync.guestion('May I have your name? ');

    console.log(`Hello ${name}`);
};