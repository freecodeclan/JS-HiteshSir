// --Object Literals

let symb = Symbol("Ram");

const jsUser = {
  [symb]: "Vishnu",
  name: "Harsh",
  age: 31,
  Address: "Siddharth Nagar",
  email: "harsh@gmail.com",
};
// console.log(jsUser.age);
// console.log(jsUser["email"]);
// console.log(jsUser[symb]);
// console.log(typeof symb);
// console.log(jsUser);

//-- Singleton Object
// const person = new Object();
// person.firstName = "Harsh";
// person.lastName = "Mehra";
// person.age = 31;

// // console.log(person.firstName);
// // console.log(person.age);

// const x = person;
// x.age = 32;
// x.firstName = "Vandana";
// // console.log(x.age);
// // console.log(person.firstName);

// //-- Concatination Objects
// const obj1 = { 1: "a", 2: "b", 3: "c" };
// const obj2 = { 4: "d", 5: "e" };
// const obj3 = Object.assign({}, obj1, obj2); //--Method 1
// // console.log(obj3);
// const obj4 = { ...obj1, ...obj2 };
// // console.log(obj4);

// console.log(Object.keys(person)); //-- Used to find keys of objects
// console.log(Object.values(jsUser)); //-- Used to find values of objects
// console.log(Object.entries(person)); //-- Used to find key and value pair toger of an object
// console.log(person.hasOwnProperty("age")); //-- Return boolean value if property present in object

//-- Desructuring in JS
const course = {
  courseName: "JS in Hindi",
  price: "Free no $",
  courseInstructor: "Hitesh Sir",
};

const { price } = course;
console.log(price);
