🔸 What is callback function and why do we use them in JS ?

Ans --> A callback function in JavaScript is a function that is passed as an argument to another function, to be executed later. The function that receives the callback function as an argument is often referred to as a higher-order function.

We use callback functions for several reasons:

1. Asynchronous Programming: JavaScript is single-threaded, which means it can only do one thing at a time. Callbacks allow us to handle asynchronous operations, such as reading files, making HTTP requests, or querying databases, without blocking the execution of the rest of our code.

2. Event Handling: In JavaScript, we often need to respond to user actions like clicks, key presses, or mouse movements. Callbacks are used to define the code that should run when these events occur.

3. Array Methods: Many array methods like `forEach`, `map`, `filter`, `reduce`, etc., accept callback functions. These callbacks are executed for each element in the array, allowing us to perform operations on array elements.

4. Customizability: Callbacks allow us to customize the behavior of a function. By passing different callback functions, we can change what a function does.

In the provided context, the callback functions are used with array methods like `map` and `forEach` to log the name and age of each object in the array.

🔸 Reduce Method :--- Reduce is a method used in JavaScript to combine all the elements of an array into a single value. It starts with an initial value and then applies a function to each element of the array, accumulating the results.

How reduce method works ?

You start with an initial value, which can be any type of data (number, string, array, object, etc.).
Then, you pass a function to the reduce method. The function takes two arguments: 

📍 Accumulator: The value of the initial value or the result of the previous iteration.

📍 Current Value: The current element in the array being processed.