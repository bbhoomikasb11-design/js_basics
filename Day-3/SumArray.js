const numbers = [1, 2, 3, 4, 5];

// Using reduce() with arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log("Sum:", sum);