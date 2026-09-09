/*
Week 1 Recap:

JavaScript Basics: Execution, console, comments

Variables & Data Types: let, const, var, primitives, objects

Operators: Arithmetic, comparison, logical, assignment

Control Flow: if/else, switch, ternary

Loops: for, while, do...while, break, continue
*/

console.log("\n--- VARIABLES & DATA TYPES ---");

const person = {
     name: "Alice Owusu",
    age: 38,
    isEmployed: true,
    skills: ["JavaScript", "Python", "React"],
    address: {
        street: "No, 7 street Ts",
        city: "osu",
        zip: "02101"
    },
    getFullName() {
        return this.name;
    }
};
console.log(`My Name is: ${person.name}`);
console.log(`I am ${person.age} (${typeof person.age})`);
console.log(`Currently Employed: ${person.isEmployed} (${typeof person.isEmployed})`);
console.log(` I am Skilled in: ${person.skills.join(", ")}`);
console.log(`My Address: ${person.address.city}, ${person.address.zip}`);
console.log(`Type of person: ${typeof person}`);

console.log("\n ---Operators ----");

const price = 200
const quantity = 3;
const taxrate = 0.04;
const subtotal = price * quantity;
const tax = subtotal * taxrate;
const total = subtotal + tax;

console.log(`Price: $${price}, Quantity: ${quantity}`);
console.log(`Subtotal: $${subtotal}`);
console.log(`Tax (${taxrate * 100}%): $${tax.toFixed(2)}`);
console.log(`Total: $${total.toFixed(2)}`);
console.log(`Total with discount (10%): $${(total * 0.9).toFixed(2)}`);

console.log(`\n Control flow`);

let grade, status, message;
let score = 87;
    if (score >= 90) {
        grade = "A";
        status = "Excellent";
        message = "Outstanding performance!";
    } else if (score >= 80) {
        grade = "B";
        status = "Good";
        message = "Great job!";
    } else if (score >= 70) {
        grade = "C";
        status = "Average";
        message = "Good effort, keep improving!";
    } else if (score >= 60) {
        grade = "D";
        status = "Below Average";
        message = "Need more practice";
    } else {
        grade = "F";
        status = "Failing";
        message = "Please seek help";
    }
    console.log(score,grade,message);

console.log("\n--- LOOPS ---");
const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log("using for loop");
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(`numbers[${index}] = ${numbers[index]}`);
}
console.log("\nUsing for...of loop:");
for (const num of numbers) {
    console.log(num)
}
console.log("\nUsing while loop to filter:");
let index = 0;
while (index < numbers.length) {
    if (numbers[index] % 4 === 0) {
        console.log(`${numbers[index]} is divisible by 4`);
    }
    index++;
}


//my challenges
/*
1.after understanding the concepts think of projects that well suits it
2. ommiting indentifiers, names and variable names
3.

*/

//Add function samples to week one's lesson after treating functions 