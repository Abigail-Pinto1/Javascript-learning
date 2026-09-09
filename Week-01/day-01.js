// This is a single-line comment, which the symbols // are used

/*
  This is a multi-line comment
  It can span multiple lines
  the symbols  used are the slash and star
*/


/**
 * This is a JSDoc comment
 * Used for documentation
 */

//There are different ways to console an output 
// and they are listed below

// 1. The basic output
console.log("this is my roadmap");

// 2. This uses the different console methods
console.error("this is an error message which shows in red");
console.warn("this is a warning");
console.table(["first", "second", "third"]);

// 3. using console.group
console.group('Essay');
console.log("About Me");
console.log("My name is Abby");
console.log("I am 2 years");
console.groupEnd()

//4. timer operations
console.time("timing");
//add a function or condintion to measure time the 
console.timeEnd('timing');

//5. mutilple values in one console log
console.log("Name:", "Aaliya", "Age:", 43, "active:", true);

//some test outputs for some console.log
console.log(1 + 2);
console.log("1" + "2");
console.log(1 + "2");
console.log(true + 1);
console.log(false + 1);
console.log(null + 1);
console.log(undefined + 1);

//About me 
console.log("=".repeat(40)); //repeats the = sign 40 times
console.log(" ABOUT ME ");
console.log("=".repeat(40));

console.group("Personal Details");
console.log('Name: Abby');
console.log('Age: 56 years old');
console.log('City: Accra');
console.groupEnd();

console.group("Status");
console.log('isStudent: "Yes" : "No" ');

console.groupEnd();

// Fun fact
console.log("\n Fun Fact:");
console.log('I like to swim');

console.log("=".repeat(40));

//additional  Challenge: Print 10 different values and explain what each is
console.log(typeof "Hello", "Hello"); // string

console.log(typeof 42, 42); // number

console.log(typeof true, true); // boolean

console.log(typeof null, null); // object (this is a known bug in JavaScript)

console.log(typeof undefined, undefined); // undefined

console.log(typeof {name: "John"}, {name: "John"}); // object

console.log(typeof [1, 2, 3], [1, 2, 3]); // object

console.log(typeof function(){}, function(){}); // function

console.log(typeof Symbol("id"), Symbol("id")); // symbol

console.log(typeof 12345678901234567890n, 12345678901234567890n); // bigint  

/*
Notes taken
What is JavaScript?
JavaScript was initially created to “make web pages alive”.
The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.
Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.
In this aspect, JavaScript is very different from another language called Java.
Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.

The browser has an embedded engine sometimes called a “JavaScript virtual machine”.

Different engines have different “codenames”. For example:

V8 – in Chrome, Opera and Edge.
SpiderMonkey – in Firefox.
…There are other codenames like “Chakra” for IE, “JavaScriptCore”, “Nitro” and “SquirrelFish” for Safari, etc.
The terms above are good to remember because they are used in developer articles on the internet. We’ll use them too. For instance, if “a feature X is supported by V8”, then it probably works in Chrome, Opera and Edge
What makes JavaScript unique?
There are at least three great things about JavaScript:

Full integration with HTML/CSS.
Simple things are done simply.
Supported by all major browsers and enabled by default.
JavaScript is the only browser technology that combines these three things.

That’s what makes JavaScript unique. That’s why it’s the most widespread tool for creating browser interfaces.

That said, JavaScript can be used to create servers, mobile applications, etc.

Languages “over” JavaScript
The syntax of JavaScript does not suit everyone’s needs. Different people want different features.

That’s to be expected, because projects and requirements are different for everyone.

So, recently a plethora of new languages appeared, which are transpiled (converted) to JavaScript before they run in the browser.

Modern tools make the transpilation very fast and transparent, actually allowing developers to code in another language and auto-converting it “under the hood”.

Examples of such languages:

CoffeeScript is “syntactic sugar” for JavaScript. It introduces shorter syntax, allowing us to write clearer and more precise code. Usually, Ruby devs like it.
TypeScript is concentrated on adding “strict data typing” to simplify the development and support of complex systems. It is developed by Microsoft.
Flow also adds data typing, but in a different way. Developed by Facebook.
Dart is a standalone language that has its own engine that runs in non-browser environments (like mobile apps), but also can be transpiled to JavaScript. Developed by Google.
Brython is a Python transpiler to JavaScript that enables the writing of applications in pure Python without JavaScript.
Kotlin is a modern, concise and safe programming language that can target the browser or Node.
There are more. Of course, even if we use one of these transpiled languages, we should also know JavaScript to really understand what we’re doing.
*/


