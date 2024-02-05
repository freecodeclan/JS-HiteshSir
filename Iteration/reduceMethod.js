const myNums = [1, 2, 3, 4, 5];

const newNums = [2, 4, 6];

const myTotals = myNums.reduce(function (accumulator, curVal) {
  console.log(`accumulator: ${accumulator} and currentValue: ${curVal}`);
  return accumulator + curVal;
}, 0);
console.log(myTotals);

//--> Here we used arrow function
const total = newNums.reduce((acc, curVal) => acc + curVal, 0);
console.log(total);
