// let myDate = new Date();
// console.log("toString :", myDate.toString());
// console.log("toISO : ", myDate.toISOString());
// console.log("toJSON : ", myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

let myDate = new Date("01-20-2024");
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(myDate.getTime() / 1000));
