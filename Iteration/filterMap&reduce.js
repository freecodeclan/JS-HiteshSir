//--> Using filter() method
const myFavNum = [2, 5, 6, 8, 15, 19, 21];

const myNum = myFavNum.filter((val) => val > 8);

//--> Using forEach() method
const newNum = [];
myFavNum.forEach((num) => {
  if (num > 6) {
    newNum.push(num);
  }
});
console.log(newNum);

//--> Adding 10 in all the number present in Array using map() method bcoz map method automatically return value
const arr = [2, 4, 6, 8, 10];
const newArr = arr.map((val) => val + 10);
console.log(newArr);
