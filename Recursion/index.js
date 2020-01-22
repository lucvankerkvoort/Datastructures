function findFactorialIterative(number) {
  let answer = 1;
  if (answer === 2) {
    return answer;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return console.log(answer);
}
findFactorialIterative(5);

function findFactorialRecursive(number) {
  if (number === 2) {
    return number;
  }
  return number * findFactorialRecursive(number - 1);
}
findFactorialRecursive(5);

function findFib(number) {
  if (number < 2) {
    return number;
  }
  return findFib(number - 1) + findFib(number - 2);
}
findFib(8);
