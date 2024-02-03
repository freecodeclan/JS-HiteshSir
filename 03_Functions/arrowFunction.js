// const user = {
//   username: "Harsh",
//   price: 999,

//   welcomeMsg: function () {
//     console.log(`${this.username}, Welcome to website`);
//     // console.log(this);
//   },
// };
// user.welcomeMsg();
// user.username = "Sam";
// user.welcomeMsg();
// console.log(this);

function chai() {
  console.log(this);
}
chai();

//--- Basic Arrow Function
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(20, 30));

//-- Implicit Arrow Function  (Means no need to write parenthesis{} and return statement)

const addThree = (num1, num2, num3) => num1 + num2 + num3;
console.log(addThree(20, 30, 10));

const twoThree = (num1, num2) => ({ username: "Harsh" });
console.log(twoThree());
