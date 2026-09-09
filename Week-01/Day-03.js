/*
Operators
 are symbols or keywords used to perform operations on values and variables. 
 They serve as the core building blocks for manipulating data, calculating values, and handling logic in applications.
Standard Operator Categories
1. Arithmetic
 this operator performes mathematical calculations 
 +, -, *, /, %, **
2. Assignment
 Assigns or updates variable values.
 =, +=, -=, *=, /=
3.  Comparison
 Evaluates equality or differences as Booleans.
 ==, ===, !=, !==, >, <, >=, <=
4. Logical 
 Combines or inverts Boolean values.
 && (AND), || (OR), ! (NOT)
 */



console.log("\n---ARITHMETIC OPERATORS");
const a = 22; 
const b =21;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);

console.log("\n---ASSIGNMENT OPERATORS");
let x =30;
console.log(`x =${x}`);
x +=4;
console.log(`x += 4 => ${x}`);


console.log("\n--- COMPARISON ---");
const num1 = 5;
const num2 = "5";

console.log(`5 == "5" : ${5 == "5"}`);


console.log("\n--- LOGICAL ---");
const isLoggedIn = true;
const isAdmin = false;
const age = 25;

console.log(`true && true: ${true && true}`);
console.log(`true && false: ${true && false}`);
console.log(`false && false: ${false && false}`);
console.log(`true || false: ${true || false}`);
console.log(`false || false: ${false || false}`);
console.log(`!true: ${!true}`);
console.log(`!false: ${!false}`);


console.log("\n--- SHORT-CIRCUIT ---");
console.log(`true && "Hello": ${true && "Hello"}`);
console.log(`false && "Hello": ${false && "Hello"}`);
console.log(`true || "Hello": ${true || "Hello"}`);
console.log(`false || "Hello": ${false || "Hello"}`);


console.log("\n--- NULLISH COALESCING ---");
const nullValue = null;
const undefinedValue = undefined;
const defaultValue = "default";

console.log(`null ?? "default": ${nullValue ?? defaultValue}`);
console.log(`undefined ?? "default": ${undefinedValue ?? defaultValue}`);
console.log(`0 ?? "default": ${0 ?? defaultValue}`);
console.log(`"" ?? "default": ${"" ?? defaultValue}`);
console.log(`false ?? "default": ${false ?? defaultValue}`);


console.log("\n--- UNARY OPERATORS ---");
let count = 5;
console.log(`count: ${count}`);
console.log(`count++: ${count++}`); // Post-increment (returns then increments)
console.log(`after count++: ${count}`);
console.log(`++count: ${++count}`); // Pre-increment (increments then returns)
console.log(`after ++count: ${count}`);

console.log(`typeof 42: ${typeof 42}`);
console.log(`typeof "hello": ${typeof "hello"}`);


console.log("\n--- PRECEDENCE ---");
console.log(`3 + 4 * 5 = ${3 + 4 * 5}`); // 23 (multiplication first)
console.log(`(3 + 4) * 5 = ${(3 + 4) * 5}`); // 35
console.log(`10 / 2 * 3 = ${10 / 2 * 3}`); // 15 (left to right)
console.log(`10 / (2 * 3) = ${10 / (2 * 3)}`); // 1.666...


console.log("\n--- PRACTICAL EXAMPLES ---");

const weight = 70; 
const height = 1.75; 
const bmi = weight / (height ** 2);
console.log(`BMI: ${bmi.toFixed(2)}`);


const price = 500;
const discount = 20;
const discountAmount = price * (discount / 100);
const finalPrice = price - discountAmount;
console.log(`Price: $${price}`);
console.log(`Discount: ${discount}% ($${discountAmount})`);
console.log(`Final Price: $${finalPrice}`);

const userAge = 18;
const canVote = userAge >= 18;
console.log(`Age: ${userAge}, Can Vote: ${canVote}`);

