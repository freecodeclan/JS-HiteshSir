function myFunction() {
  let localVariable = "I am in local scope";
  console.log(localVariable);
}

myFunction();
// console.log(localVariable);

//-- Variable Shadowing
let message = "Global Message";

function showMessage() {
  let message = "Local Message";
  console.log(message);
}

showMessage();
console.log(message);
