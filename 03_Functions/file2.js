//-- Buildiing a function for shopping cart when we don't know how many items customer will add in his/her cart

function calculateCartPrice(...num1) {
  //--- Using rest operator in function
  return num1;
}
const finalCartItems = calculateCartPrice(20, 100, 200, 4000, 50000);
console.log("Final cart items are: ", finalCartItems);

//-- Passing object as Parameter in function

//--Method 1 Creating an Object
const hotel = new Object();
hotel.name = "Rajvillas";
hotel.city = "Jaipur";
hotel.noOfRooms = 75;

function placeToStay(anyObject) {
  console.log(
    `Best hotel is ${anyObject.name}. The hotel is in ${anyObject.city} city, and it is a property of ${anyObject.noOfRooms} rooms.`
  );
}

placeToStay(hotel);

//-- Method 2 Passing Object directly in function
placeToStay({
  name: "Udaivillas",
  city: "Udaipur",
  noOfRooms: 55,
});
