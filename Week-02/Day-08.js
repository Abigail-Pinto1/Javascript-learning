/*
Function Types Comparison:

Feature	        Function-Declaration	 Function-Expression	  Arrow-Function
Hoisting	    Yes              	     No                     	No
this binding	Dynamic             	 Dynamic	              Lexical
Can use as constructor	Yes	             Yes	                  No
Has arguments	Yes	                    Yes	                      No
Syntax	        function name()	        const fn = function()	  const fn = () =>
*/

//a sample of an arrow function with no parameters
const greets = () => "Hello";

//a sample of an arrow function with One parameter 
// the parentheses are optional
const squares = x => x * x;

// this is with Multiple parameters
const adds = (a, b) => a + b;

// this is Multiple statements
const process = (x) => {
    const result = x * 2;
    return result + 5;
};

console.log("=".repeat(50));
console.log("ADVANCED FUNCTIONS - DAY 08");
console.log("=".repeat(50));

// a sample of hoisted Function Declaration 
function declaredFunction() {
    console.log("I'm hoisted!");
}
declaredFunction();

//a sample of a function Expression (not hoisted)
const expressionFunction = function() {
    console.log("I'm not hoisted!");
};
expressionFunction();

// a sample of a basic arrow function
const sayHello = () => console.log("Hello!");
sayHello();

// Implicit return (single expression)
const square = x => x * x;
console.log(`5^2 = ${square(5)}`);

// Multiple parameters
const multiply = (a, b) => a * b;
console.log(`3 × 4 = ${multiply(3, 4)}`);

// a sample of an arrow function with objects (wrap in parentheses)
const createUser = (name, age) => ({ name, age });
console.log(createUser("Alice", 25));

function greet(name = 'Guest', greeting = 'hi') {
    return `${greeting}, ${name}`;
}
console.log(greet('Abby'));
console.log(greet());

// a default parameters with expressions
function calculatePrice(price, tax = price * 0.08) {
    return price + tax;
}
console.log(`Price $100 with default tax: $${calculatePrice(100)}`);
console.log(`Price $100 with custom tax: $${calculatePrice(100, 10)}`);

// Default parameters with previous parameters
function createMessage(name, greeting = `Hello ${name}`) {
    return `${greeting}! Welcome!`;
}
console.log(createMessage("John"));

//this is a binding difference arrow and regular function
const obj = {
    name: "Object",
    regularFunction: function() {
        console.log("Regular function this:", this.name);
    },
    arrowFunction: () => {
        console.log("Arrow function this:", this.name);
    }
};
obj.regularFunction(); 
obj.arrowFunction(); 
// Can't use arrow functions as constructors it returns undefine

//function currying (multiple return statement)
function add(a) {
    return function(b) {
        return a + b;
    };
}
const add5 = add(5);
console.log(`add5(3) = ${add5(3)}`);
console.log(`add(10)(20) = ${add(10)(20)}`);

// Currying with arrow functions
const multiply2 = a => b => a * b;
const double = multiply2(2);
console.log(`double(7) = ${double(7)}`);

function discountCalculator(discount) {
    return function(price) {
        return price * (1 - discount);
    };
}

const tenPercentOff = discountCalculator(0.10);
const twentyPercentOff = discountCalculator(0.20);

console.log(`$100 with 10% off: $${tenPercentOff(100)}`);
console.log(`$50 with 20% off: $${twentyPercentOff(50)}`);

// THIS IS FUNCTION COMPOSITION ADVANCED

const compose2 = (f, g) => x => f(g(x));
const addOne = x => x + 1;
const double2 = x => x * 2;
const square3 = x => x * x;

const addOneAndDouble = compose2(double2, addOne);
const addOneAndSquare = compose2(square3, addOne);

console.log(`addOneAndDouble(3) = ${addOneAndDouble(3)}`);
console.log(`addOneAndSquare(3) = ${addOneAndSquare(3)}`);

// A calculator using arrow functions
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : "Cannot divide by zero",
    power: (a, b) => Math.pow(a, b),
    factorial: (n) => {
        if (n < 0) return "Invalid input";
        if (n <= 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
};
console.log(calculator.add(5, 3));
console.log(calculator.factorial(5));
