/*
What are Functions?
Reusable blocks of code that perform specific tasks
Help avoid code duplication
Make code more organized and maintainable
Function Components:

function functionName(parameter1, parameter2) {
     Function body
    return result; 

Declaration: Defining a function

Parameters: Variables in function definition

Arguments: Actual values passed to function

Return: Value sent back from function

Function Scope: Variables inside functions are local
}
Function Types:
Function Declaration
Function Expression
Arrow Functions 
IIFE (Immediately Invoked Function Expression)

*/

console.log("=".repeat(50));
console.log("FUNCTIONS - DAY 07");
console.log("=".repeat(50));

function greet() {
    console.log("good morning")
}
greet();

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}
greetUser("Alice");
greetUser("Bob");

function add(a, b) {
    return a + b;
}
const sum = add(5, 3);
console.log(`5 + 3 = ${sum}`);

console.log("\n--- PARAMETERS & ARGUMENTS ---");

function createUser(name, age, city) {
    return {
        name: name,
        age: age,
        city: city
    };
}
const user1 = createUser("John", 25, "New York");
console.log(user1);

function checkAge(age) {
    if (age < 0) {
        return "Invalid age";
    }
    if (age < 18) {
        return "Minor";
    }
    if (age < 65) {
        return "Adult";
    }
    return "Senior";
}
console.log(checkAge(15));
console.log(checkAge(25));
console.log(checkAge(70)); 
console.log(checkAge(5));

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    let category;
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";    
    return {
        bmi: bmi.toFixed(2),
        category: category,
        weight: weight,
        height: height
    };
}
const bmiResult = calculateBMI(70, 1.75);
console.log(`BMI: ${bmiResult.bmi} - ${bmiResult.category}`);
