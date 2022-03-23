const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i += 1) {
    i % 3 === 0 && i % 5 !== 0 ? console.log('Fizz') : false;
    i % 3 !== 0 && i % 5 === 0 ? console.log('Buzz') : false;
    i % 3 === 0 && i % 5 === 0 ? console.log('FizzBuzz') : false;
    i % 3 !== 0 && i % 5 !== 0 ? console.log(i) : false;
  }
};
fizzBuzz(100);
