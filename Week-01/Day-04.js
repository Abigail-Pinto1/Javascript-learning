/*
Control Flow (if/else, switch, ternary)
Control flow in JavaScript manages the execution order of code statements based on conditions. 
The primary structures used to make decisions are if/else statements, switch blocks, and the ternary operator
if...else
The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
If we want to execute more than one statement, we have to wrap our code block inside curly braces:

if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}
  Boolean conversion
The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

Let’s recall the conversion rules from the chapter Type Conversions:

A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”.
The “else” clause
The if statement may contain an optional else block. It executes when the condition is falsy.

For example:

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

The "switch" statement
A switch statement can replace multiple if checks.
It gives a more descriptive way to compare a value with multiple variants.
Ternary Operator (? :)The conditional ternary operator is a single-line inline shorthand for a standard if/else structure. 
It evaluates a condition, returning the expression before the colon if truthy, and the expression after the colon if falsy
*/


const score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade ="B";
} else if (score >= 70) {
    grade = "C";
}else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log(`Score: ${score}, Grade: ${grade}`);

const age = 40;
if (age < 13) {
    console.log("you are a child");
} else if (age < 18) {
    console.log("you are a teenager");
}else if (age <69) {
    console.log("you are an adult")
} else {
    console.log("you are a senir");
}

const position = 5;
const message = position > 3
? "you came in the third position" 
: position > 2
? "you toke the second position"
: position > 1
? "you are a genius" 
: "you are not in the top 3" ;
console.log(message);

const username = "admin";
const password = "secret223";
if (username && password ) {
    if (username === "admin" && password === "secret223") {
        console.log("login successful");
    } else {
        console.log("wrong login details")
    }
} else {
    console.log("enter a correct login detail")
}

console.log("\n---- SWITCH---");

const day = new Date().getDay();
let daysName;

switch (day) {
    case 0:
        daysName = "Sunday";
        break;
    case 1:
        daysName = "Monday";
        break;
    case 2:
        daysName = "Tuesday";
        break;    
    case 3:
        daysName = "Wednesday";
        break;
    case 4:
        daysName = "Thursday";
        break; 
    case 5:
        daysName = "Friday";
        break;
    case 6:
        daysName = "Saturday";
        break;    

    default:
        daysName = "Invalid day";
}
console.log(`Today is ${daysName}`);

