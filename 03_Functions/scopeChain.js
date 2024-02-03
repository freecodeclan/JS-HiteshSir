let globalVariable = "I am global";

function outerFunction() {
  let outerVariable = "I am in outer scope";

  function innerFunction() {
    let innerVariable = "I am inner scope";
    console.log(innerVariable);
    console.log(outerVariable);
    console.log(globalVariable);
  }
  innerFunction();
}
outerFunction();
