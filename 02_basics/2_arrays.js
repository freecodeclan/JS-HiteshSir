function myMinValue(arr) {
  return Math.min.apply(null, arr);
}

function myMaxValue(arr) {
  return Math.max.apply(null, arr);
}

let points = [40, 100, 1, 5, 25, 10];

points.sort((a, b) => a - b);
console.log(points);
let minValue = myMinValue(points);
points.sort((a, b) => b - a);
console.log(points);
let maxValue = myMaxValue(points);
console.log("The minimum value in array is ", minValue);
console.log("The maximum value in array is ", maxValue);
