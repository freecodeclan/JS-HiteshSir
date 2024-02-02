function myFunction() {
  if (true) {
    var localVariable = "I am in block scope"; //-- If instead of var we use let than the localVariable will not be accessible
    let blockVariable = "I am also in block scope";
  }
  console.log(localVariable);
  console.log(blockVariable); //-- This will be not accessible
}
myFunction();
