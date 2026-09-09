/*
DOM, querySelector, querySelectorAll, getElementById
What is the DOM?
The Document Object Model, or DOM for short, represents all page content as objects that can be modified.
Document Object Model

Tree-like representation of HTML document
According to the Document Object Model (DOM), every HTML tag is an object. Nested tags are “children” of the enclosing one. The text inside a tag is an object as well.
JavaScript can manipulate it to change content, structure, and style

Every HTML element becomes a node in the DOM tree

Selecting Elements:

Method	                 Returns	             Example
getElementById()	     Single element	document.getElementById('main')
getElementsByClassName() HTMLCollection	document.getElementsByClassName('item')
getElementsByTagName()	 HTMLCollection	document.getElementsByTagName('div')
querySelector()	         Single element	document.querySelector('.item')
querySelectorAll()	     NodeList	document.querySelectorAll('.item')
*/

console.log("=".repeat(50));
console.log("DOM SELECTION - DAY 13");
console.log("=".repeat(50));

// 1. GET ELEMENT BY ID
console.log("\n--- getElementById ---");
const mainTitle = document.getElementById('main-title');
console.log('Element by ID:', mainTitle);
console.log('Text:', mainTitle.textContent);

// Change content
mainTitle.textContent = 'DOM Selection Mastery!';
mainTitle.style.color = '#d32f2f';

// 2. GET ELEMENTS BY CLASS NAME
console.log("\n--- getElementsByClassName ---");
const items = document.getElementsByClassName('item');
console.log('Items count:', items.length);
console.log('First item:', items[0].textContent);

// Iterate (HTMLCollection - use for loop)
for (let i = 0; i < items.length; i++) {
    console.log(`Item ${i + 1}:`, items[i].textContent);
}

// 3. GET ELEMENTS BY TAG NAME
console.log("\n--- getElementsByTagName ---");
const divs = document.getElementsByTagName('div');
console.log('Total divs:', divs.length);

// 4. QUERY SELECTOR (first match)
console.log("\n--- querySelector ---");
const firstItem = document.querySelector('.item');
console.log('First item:', firstItem.textContent);

const specialItem = document.querySelector('.item.special');
console.log('First special item:', specialItem.textContent);

const demoBox = document.querySelector('#demo1');
console.log('Demo box 1:', demoBox);

// 5. QUERY SELECTOR ALL
console.log("\n--- querySelectorAll ---");
const allItems = document.querySelectorAll('.item');
console.log('All items:', allItems.length);

const specialItems = document.querySelectorAll('.item.special');
console.log('Special items:', specialItems.length);

// NodeList - can use forEach
allItems.forEach((item, index) => {
    console.log(`Item ${index + 1}:`, item.textContent);
});