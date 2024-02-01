/*  Creating Array */

// let myArray = [1, 2, "Harsh", true];
// console.log(myArray);

// let myArray2 = new Array(1, 2, "Juhu", true);
// console.log(myArray2);
// myArray2.push("harsh");
// myArray2.push(31);
// console.log(myArray2);

// myArray.pop();
// console.log(myArray);

// myArray2.unshift("ShreeRam");
// console.log(myArray2);

// console.log(myArray);
// console.log(myArray.shift());

// let god = new Array("Jai", "Shree", "Ram"); //-- Creating Array
// console.log(god);

// god.shift(); //-- Removing first element from Array
// console.log(god);

// god.unshift("Jai"); //-- Adding element in starting
// god.push("Jai"); //--- Adding element in end
// god.push("Bajrangbali");
// console.log(god);

// console.log(god.includes("Jai")); //-- Used to search element in array
// console.log(god.indexOf("Bajrangbali")); //--Used to search index value of an element

// let newArray = [1, 2, 3, 4, 5, 6];
// console.log("A", newArray);

// let myn1 = newArray.slice(1, 3);
// console.log(myn1);
// console.log("B", newArray);

// let myn2 = newArray.splice(1, 3);
// console.log("C", newArray);
// console.log(myn2);

// let god = newArray.join();

// console.log(god);
// console.log(typeof god);

let company = new Array("Hyundai", "Maruti", "Tata");
let cars = ["Verna", "Vitara", "Harrier"];

let details = company.concat(cars);
console.log(details);
console.log(details[4]);
console.log(typeof company);
console.log(typeof details);

let name = new Array("Harsh", "Vandana", "Gaurav");
let lastName = ["Mehra", "Bhkuni", "Bhakuni"];
let fullName = [...name, ...lastName];
console.log(fullName);
console.log(typeof fullName);

let series1 = "one";
let series2 = "two";
let series = [...series1, ...series2];
console.log(typeof series);

const myArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
const newArray = myArray.flat(Infinity);
console.log(newArray);

console.log(Array.isArray("Harsh is good dev"));
console.log(Array.from("Harsh is good dev"));

console.log(myArray.length);
