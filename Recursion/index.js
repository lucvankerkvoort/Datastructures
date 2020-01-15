function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

findFactorialRecursive(5);
function findFactorialIterative(number) {
  let answer = 0;
  let num = 1;
  for (let i = 1; i < number; i++) {
    answer = num * (i + 1);
    num = answer;
  }
  return console.log(answer);
}

findFactorialIterative(4);
// list sum of numbers

let arr = [1, 5, 6, 8, 2, 12, 26, 3, 4];
let index = 0;
let answer = 0;
function recursiveExercise(arr, index, answer) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    answer = answer + arr[index];
    console.log(answer);
    if (index === arr.length - 1) {
      return console.log(answer);
    }
    index++;
    recursiveExercise(arr, index, answer);
  }
}

// recursiveExercise(arr, index, answer);

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// fibonacciRecursive(8);

function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return console.log(arr.pop());
}

fibonacciIterative(8);
