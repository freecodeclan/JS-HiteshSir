const heros = ["captainAmerica", "Thor", "Hulk", "Spiderman"];

//---> Using for of loop
for (const val of heros) {
  console.log(val);
}

//-- Using for of loop on map
const map = new Map(); //-- Map only store unique values and the sequence of storing remain same in map
map.set(101, "Harsh");
map.set(102, "Vandana");
map.set(103, "Raji");

for (const [key, value] of map) {
  console.log(key, ":", value);
}

//-- Using for of loop on objects is non-iterable
const hyundai = {
  CarName: "Creata",
  Engine: "1500cc",
  Color: "Blue",
  GearBox: "CVT",
};
/*for (const key of hyundai) {
  console.log(ke);
}
*/

//-- To iterate over objects we use for in loop
for (const key in hyundai) {
  console.log(key, ":", hyundai[key]);
}

//---> for each loop {Most commonly used loop}
const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (val) {
//   console.log(val);
// });
coding.forEach((val) => {
  console.log(val);
});
