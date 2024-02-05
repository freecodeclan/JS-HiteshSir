const myNums = [2, 4, 6, 8, 10];
const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 2)
  .filter((num) => num > 42);
console.log(newNums);
