//-- Method 1

// function sayMyName() {
//   console.log("Harsh Mehra");
// }

// sayMyName(); //-- Reference and Execution of function

// function multiplyTwoNumber(number1, number2) {
//   console.log(number1 * number2);
// }

// const result = multiplyTwoNumber(2, 2);
// console.log("Result Value: ", result);

// function addTwoNumber(num1, num2) {
//   return num1 + num2;
// }

// const addition = addTwoNumber(10, 30);
// console.log("Addition Value: ", addition);

function loginUSerMessage(userName) {
  //-- This is check statement if user did not passed any value only then this block of code will execute
  if (!userName) {
    //-- This condition stands for userName is not present
    console.log("Please enter the user name");
    return;
  }
  return `${userName} just logged in`;
}

const user = loginUSerMessage();
console.log(user);
console.log(loginUSerMessage("Vandana"));
