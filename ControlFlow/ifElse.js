if (2 == "2") {
  console.log("A: Executed");
}

if (2 === "2") {
  console.log("B: Executed");
}

const balance = 1000;
if (balance > 500) console.log("Test"); //--> Implicit Scope

if (balance < 500) {
  console.log("Less than");
} else if (balance < 750) {
  console.log("Less than 750");
} else {
  console.log("More than 1000");
}
