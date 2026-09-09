/*
Loops (for, while, do...while)
We often need to repeat actions.
For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.
Loops are a way to repeat the same code multiple times.

for loop: When you know how many times to iterate
for (initialization; condition; increment) {
    // Code to repeat
}

while loop: When condition needs to be checked first
while (condition) {
    // Code to repeat
}

do...while loop: Always executes at least once
do {
    // Code to repeat
} while (condition);

Loop Control

break: Exit loop immediately

continue: Skip current iteration
*/

console.log("nubers 1-10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\n even numbers up to 20:");
for ( let a = 2; a <= 20; a +=2) {
    console.log(a);
}

console.log("\n while loop");
let countdown = 5;
console.log("countdown")
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log("huurraayy!");

let sum = 0;
let num = 1;
while (num <= 100) {
    sum += num;
    num++;
}
console.log(`Sum of 1-100: ${sum}`);

console.log("\n do..while loop");

let count = 0;
do {
    console.log(`Count: ${count}`);
    count++;
} while (count < 3);

