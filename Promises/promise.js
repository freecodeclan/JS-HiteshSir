//---> Creation of Promise

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

//---> Consuming Promise

promiseOne.then(function () {
  console.log("Promise Consumed");
});

//--Promise 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async tak 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Harsh", MobileNum: +919571299002 });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

//---> Promise Creation 4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ carCompany: "Hyundai", carName: "Verna 1.5" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

//---> Consuming Promise using .then() and .catch() and ,finally()
promiseFour
  .then((user) => {
    console.log(user);
    return user.carCompany;
  })
  //---Chaining Method returned value
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise either resolved or rejected");
  });

//---> Creating Promise 5
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ carName: "Slavia", Engine: "1500cc" });
    } else {
      console.log("ERROR: Car Company Missing");
    }
  }, 1000);
});

//---Using async await method to consume promise
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();
