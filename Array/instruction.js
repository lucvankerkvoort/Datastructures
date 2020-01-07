let array = [1, 4, 5, 6, 1, 2, 4];
let array2 = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] === 1) {
    array2.push(i);
  }
}

console.log(array2);
