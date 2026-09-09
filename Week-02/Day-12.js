/*
Destructuring, Spread, and Weekly Integration

*/

// week2-day6.js - Destructuring, Spread, Integration

console.log("=".repeat(50));
console.log("DESTRUCTURING & SPREAD - DAY 12");
console.log("=".repeat(50));

// ARRAY DESTRUCTURING
const colors = ["red", "green", "blue", "yellow", "purple"];

// Basic destructuring
const [first, second] = colors;
console.log(`First: ${first}, Second: ${second}`);

// Skip elements
const [, , third] = colors;
console.log(`Third: ${third}`);

// Rest pattern
const [primary, secondary, ...others] = colors;
console.log(`Primary: ${primary}, Secondary: ${secondary}`);
console.log("Others:", others);

// Default values
const [a = "default", b = "default"] = [1];
console.log(`a: ${a}, b: ${b}`);

// Swapping variables
let x = 5, y = 10;
[x, y] = [y, x];
console.log(`x: ${x}, y: ${y}`);

// OBJECT DESTRUCTURING
const person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    occupation: "Developer",
    address: {
        street: "123 Main St",
        zip: "10001"
    }
};

// Basic destructuring
const { name, age } = person;
console.log(`Name: ${name}, Age: ${age}`);

// Rename variables
const { name: fullName, city: location } = person;
console.log(`Full Name: ${fullName}, Location: ${location}`);

// Default values
const { email = "no email", phone = "no phone" } = person;
console.log(`Email: ${email}, Phone: ${phone}`);

// Nested destructuring
const { address: { street, zip } } = person;
console.log(`Street: ${street}, ZIP: ${zip}`);

// Rest pattern
const { name: name2, ...rest } = person;
console.log("Rest:", rest);

// DESTRUCTURING IN PARAMETERS
function displayUser({ name, age, city = "Unknown" }) {
    console.log(`${name} (${age}) from ${city}`);
}
displayUser(person);

function processArray([first, second, ...rest]) {
    console.log(`First: ${first}, Second: ${second}`);
    console.log("Rest:", rest);
}
processArray([1, 2, 3, 4, 5]);

//SPREAD OPERATOR
// Array spread
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combined = [...numbers1, ...numbers2];
console.log("Combined:", combined);

// Copy array
const copy = [...numbers1];
console.log("Copy:", copy);

// String to array
const chars = [..."Hello"];
console.log("Chars:", chars);

// Object spread
const base = { a: 1, b: 2 };
const extended = { ...base, c: 3, d: 4 };
console.log("Extended:", extended);

// Override properties
const defaults = { theme: "light", language: "en" };
const userSettings = { theme: "dark" };
const settings = { ...defaults, ...userSettings };
console.log("Settings:", settings);

//REST PARAMETERS
console.log("\n--- REST PARAMETERS ---");

function sumAll(...numbers) {
    return numbers.reduce((sum, n) => sum + n, 0);
}
console.log(`Sum: ${sumAll(1, 2, 3, 4, 5)}`);

function logWithPrefix(prefix, ...messages) {
    messages.forEach(msg => console.log(`${prefix}: ${msg}`));
}
logWithPrefix("INFO", "System started", "User logged in");

//PRACTICAL EXAMPLES
console.log("\n--- PRACTICAL EXAMPLES ---");

// Update user settings
function updateUserSettings(currentSettings, updates) {
    return { ...currentSettings, ...updates };
}

const current = { theme: "light", notifications: true, language: "en" };
const updated = updateUserSettings(current, { theme: "dark", language: "es" });
console.log("Updated settings:", updated);

// Combine arrays with transformation
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined2 = [...arr1, ...arr2].map(n => n * 2);
console.log("Combined and doubled:", combined2);

//WEEK 1 & 2 INTEGRATION
// Complete student management system
const students = [
    { name: "Alice", scores: [85, 92, 78, 90], grade: "A" },
    { name: "Bob", scores: [70, 65, 80, 75], grade: "B" },
    { name: "Charlie", scores: [95, 98, 92, 96], grade: "A" },
    { name: "Diana", scores: [60, 65, 70, 55], grade: "D" },
    { name: "Eve", scores: [45, 50, 55, 40], grade: "F" }
];

// Calculate averages with map
const studentAverages = students.map(({ name, scores }) => ({
    name,
    average: scores.reduce((sum, s) => sum + s, 0) / scores.length
}));
console.log("Student averages:", studentAverages);

// Filter and sort
const topStudents = students
    .filter(({ grade }) => grade === "A" || grade === "B")
    .map(({ name, scores }) => ({
        name,
        average: scores.reduce((sum, s) => sum + s, 0) / scores.length
    }))
    .sort((a, b) => b.average - a.average);
console.log("Top students:", topStudents);

// Group by grade
const groupedByGrade = students.reduce((groups, student) => {
    const { grade } = student;
    if (!groups[grade]) groups[grade] = [];
    groups[grade].push(student.name);
    return groups;
}, {});
console.log("Grouped by grade:", groupedByGrade);
