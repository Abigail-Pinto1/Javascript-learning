/*
Notes on Variables and Data Types
Variables in JavaScript:
Keyword	Scope	  Reassignable	Redeclarable	Hoisting
var	    Function  Yes	         Yes	         Yes (initialized as undefined)
let  	Block	  Yes	         No	             Yes (temporal dead zone)
const	Block	  No	         No	             Yes (temporal dead zone)

Data Types in JavaScript:

Primitive Types (7 types):

string - Text data: "Hello", 'World', `Template`

number - Integers and floats: 42, 3.14, -5

boolean - true or false

undefined - Variable declared but not assigned

null - Intentionally empty value

symbol - Unique identifier (ES6)

bigint - Large integers (ES2020)

Reference Types:

object - Collections of data

array - Ordered lists

function - Callable objects

date - Date objects

regexp - Regular expressions
*/


console.log("=".repeat(40));
console.log("Variables and data types");
console.log("=".repeat(40));

// 1. VAR - Old way (avoid using)
var news = "legacy";
var news =" supreme";
// can use the same var name for multiple assignment
//can redeclare
console.log(news); //shows the last news

// 2. LET - Modern, block-scoped
let age = 24;
age = 89; //allowed
//let age = 34 cant redeclare using the same name
console.log(age); //shows the last reassigned value

// 3. CONST - Cannot change
const PI = 3.14159;
const name = "Bibi";
//cannot reassign and redeclare
console.log(PI, name);


let integer = 443;
let single ='singles';
let double = "doubles";
let backtick = `Template literal ${integer}`;
console.log(single, double, backtick);

let isTrue = true; 
let isFalse = false;

// 4. STRINGS
const singleQuote = 'Hello World';
const doubleQuote = "Hello World";
const templateLiteral = `Hello ${singleQuote}`;
console.log(singleQuote, doubleQuote, templateLiteral);

const profile = {
    name: 'Gaol',
    age: 45,
    phone: '0244202020',
    occupation: "Software Developer",
    company: "bridge",
    yearsOfExperience: 5,
}
console.group("👤 Personal Information");
console.log(`Name: ${profile.name} ${profile.lastName}`);
console.log(`Age: ${profile.age}`);
console.log(`company: ${profile.company}`);
console.log(`Phone: ${profile.phone}`);
console.log(`Birth Year: ${new Date().getFullYear() - profile.age}`);
console.groupEnd();