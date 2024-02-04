for (let i = 0; i < 10; i++) {
  const element = i;
  console.log(element, " ");
}

let myHero = ["flash", "batman", "superman"];
for (let i = 0; i < myHero.length; i++) {
  console.log(myHero[i]);
}

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`${i} is the best number`);
    break;
  }
  console.log(`Value of i is ${i}`);
}
