//--Variable declared outside any function, conditional statement or loops are known as global scope

let globalVariable = "I am global scope";

function myFunction() {
  console.log(globalVariable);
}
myFunction();
