/*
Arrays in JavaScript:
Ordered collections of data
Can hold any data type
Zero-indexed
Dynamic size

Basic Array Methods:

Method	Description	Example
push()	Add to end	arr.push(4)
pop()	Remove from end	arr.pop()
unshift()	Add to beginning	arr.unshift(1)
shift()	Remove from beginning	arr.shift()
indexOf()	Find index	arr.indexOf(3)
includes()	Check existence	arr.includes(3)
slice()	Extract portion	arr.slice(1, 3)
splice()	Add/remove elements	arr.splice(2, 0, 5)
concat()	Merge arrays	arr1.concat(arr2)
join()	Convert to string	arr.join(', ')
reverse()	Reverse order	arr.reverse()
*/

console.log("=".repeat(50));
console.log("ARRAYS - DAY 09");
console.log("=".repeat(50));

const emptyArray = [];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "Hello", true, null, { name: "John" }];
const nested = [1, [2, 3], [4, [5, 6]]];

console.log("Numbers:", numbers);
console.log("Mixed:", mixed);
console.log("Nested:", nested);

// An array constructor(without the use of square bracket[])
const constructorArray = new Array(1, 2, 3);
console.log("Constructor:", constructorArray);

// Array.from()
const fromArray = Array.from("Hello");
console.log("From string:", fromArray);

// ADDING ELEMENTS
const fruits = ["Apple", "Banana"];
console.log("Original:", fruits);

// push() - add to end
fruits.push("Orange");
console.log("After push:", fruits);

// unshift() - add to beginning
fruits.unshift("Mango");
console.log("After unshift:", fruits);

// pop() - remove from end
const last = fruits.pop();
console.log(`Removed: ${last}, Updated: ${fruits}`);

// shift() - remove from beginning
const first = fruits.shift();
console.log(`Removed: ${first}, Updated: ${fruits}`);

//finding an element 
const numbers2 = [10, 20, 30, 40, 50];

console.log(`Index of 30: ${numbers2.indexOf(30)}`);
console.log(`Index of 60: ${numbers2.indexOf(60)}`);
console.log(`Includes 40: ${numbers2.includes(40)}`);
console.log(`Includes 60: ${numbers2.includes(60)}`);

//SLICE AND SPLICE
const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

// slice - creates a new array
const sliced = colors.slice(1, 4);
console.log("Original:", colors);
console.log("Sliced (1-4):", sliced);

// splice - modifies the original
const spliced = colors.splice(2, 1); // Remove at index 2
console.log("Removed:", spliced);
console.log("After splice:", colors);

// Splice to insert
colors.splice(1, 0, "Orange", "Pink");
console.log("After insert:", colors);

// Splice to insert
colors.splice(1, 0, "Orange", "Pink");
console.log("After insert:", colors);

//CONCATENATION OF ARRAYS
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const combined = arr1.concat(arr2, arr3);
console.log("Combined:", combined);

// Spread operator (ES6)
const combined2 = [...arr1, ...arr2, ...arr3];
console.log("Combined with spread:", combined2);

// JOINING ARRAYS
const words = ["Hello", "World", "JavaScript"];
console.log(words.join(" ")); 
console.log(words.join(", ")); 
console.log(words.join("")); 

//REVERSE AND SORT ARRRAYS
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Unsorted:", unsorted);

// sort()
const sorted = [...unsorted].sort((a, b) => a - b);
console.log("Sorted ascending:", sorted);
console.log("Sorted descending:", [...unsorted].sort((a, b) => b - a));

// reverse()
const reversed = [...unsorted].reverse();
console.log("Reversed:", reversed);

// PRACTICAL EXAMPLES
// Student management system
const students = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

console.log("Students:", students);

// CRUD operations
// Create
students.push("Frank");
console.log("After adding:", students);

// Read
console.log(`First student: ${students[0]}`);
console.log(`Last student: ${students[students.length - 1]}`);

// Update
students[2] = "Carol";
console.log("After update:", students);

// Delete
students.splice(3, 1);
console.log("After delete:", students);

// Search
console.log(`Is Bob in class? ${students.includes("Bob")}`);
console.log(`Index of Eve: ${students.indexOf("Eve")}`);

//ITERATION
// for loop
console.log("Using for loop:");
for (let i = 0; i < students.length; i++) {
    console.log(`${i}: ${students[i]}`);
}

// for...of
console.log("Using for...of:");
for (const student of students) {
    console.log(student);
}

// forEach
console.log("Using forEach:");
students.forEach((student, index) => {
    console.log(`${index}: ${student}`);
});

//  ARRAY MANIPULATION
const inventory = [
    { id: 1, name: "Laptop", price: 1000, stock: 5 },
    { id: 2, name: "Mouse", price: 30, stock: 20 },
    { id: 3, name: "Keyboard", price: 80, stock: 10 },
    { id: 4, name: "Monitor", price: 400, stock: 3 }
];
// Find
const monitor = inventory.find(item => item.name === "Monitor");
console.log("Found:", monitor);

// Filter
const expensiveItems = inventory.filter(item => item.price > 100);
console.log("Expensive items:", expensiveItems);

// Map
const itemNames = inventory.map(item => item.name);
console.log("Item names:", itemNames);

// Reduce - total value
const totalValue = inventory.reduce((sum, item) => sum + (item.price * item.stock), 0);
console.log(`Total inventory value: $${totalValue}`);

// Some / Every
const hasStock = inventory.some(item => item.stock > 0);
const allInStock = inventory.every(item => item.stock > 0);
console.log(`Some in stock: ${hasStock}`);
console.log(`All in stock: ${allInStock}`);