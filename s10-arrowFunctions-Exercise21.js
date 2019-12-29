// Refactor the function below to use arrow function:
// const fibonacci = function(n) {
//   if (n < 3) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const number = 7;
console.log(`Number: ${number}`);
console.log(`Fobonacci: ${fibonacci(number)}`);
