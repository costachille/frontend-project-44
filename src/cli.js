import readlineSync from 'readline-sync';

function askNameAndGreet() {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
}

export { askNameAndGreet as default };
