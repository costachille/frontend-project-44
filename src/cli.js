export const askNameAndGreet = () => {
    const name = readlineSync.guestion('May I have your name? ');

    console.log(`Hello ${name}`);
};