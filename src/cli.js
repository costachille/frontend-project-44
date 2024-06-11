import readlineSync from 'readline-sync';

export const askNameAndGreet = () => {
    const name = readlineSync.guestion('May I have your name? ');

    console.log(`Hello ${name}`);
};