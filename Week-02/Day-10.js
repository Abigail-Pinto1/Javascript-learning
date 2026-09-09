/*
map, filter, reduce, and Higher-Order Array Methods

Higher-Order Array Methods:

Method	Purpose	Returns	Example
map()	Transform each element	New array	arr.map(x => x*2)
filter()	Filter elements	New array	arr.filter(x => x>5)
reduce()	Reduce to single value	Single value	arr.reduce((acc,x)=>acc+x, 0)
find()	Find first match	Single element	arr.find(x => x.id===1)
some()	Check if any match	Boolean	arr.some(x => x>10)
every()	Check if all match	Boolean	arr.every(x => x>0)
sort()	Sort elements	New array	arr.sort((a,b)=>a-b)
forEach()	Execute for each	undefined	arr.forEach(x=>console.log(x))
Key Concepts:

These methods don't mutate the original array (except sort, reverse)

They take callback functions

They are declarative (say WHAT to do, not HOW)
*/

console.log("=".repeat(50));
console.log("HIGHER-ORDER ARRAY METHODS - DAY 10");
console.log("=".repeat(50));

const products = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics", stock: 5 },
    { id: 2, name: "Phone", price: 599, category: "Electronics", stock: 10 },
    { id: 3, name: "Book", price: 29, category: "Books", stock: 50 },
    { id: 4, name: "Keyboard", price: 79, category: "Electronics", stock: 8 },
    { id: 5, name: "Monitor", price: 399, category: "Electronics", stock: 3 },
    { id: 6, name: "Notebook", price: 5, category: "Stationery", stock: 100 },
    { id: 7, name: "Pen", price: 2, category: "Stationery", stock: 200 }
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Double each number
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// Product names only
const productNames = products.map(p => p.name);
console.log("Product names:", productNames);

// Calculate discounted prices (10% off)
const discountedPrices = products.map(p => ({
    ...p,
    discountPrice: p.price * 0.9
}));
console.log("With discount:", discountedPrices.slice(0, 3));

// Transform to different structure
const productSummaries = products.map(p => 
    `${p.name} - $${p.price} (${p.stock} in stock)`
);
console.log("Summaries:", productSummaries.slice(0, 3));

// FILTER - Select elements based on condition
console.log("\n--- FILTER ---");

// Even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);

// Products under $100
const cheapProducts = products.filter(p => p.price < 100);
console.log("Cheap products:", cheapProducts.map(p => p.name));

// Electronics in stock
const electronicsInStock = products.filter(p => 
    p.category === "Electronics" && p.stock > 0
);
console.log("Electronics in stock:", electronicsInStock.map(p => p.name));

// Products with low stock (less than 5)
const lowStock = products.filter(p => p.stock < 5);
console.log("Low stock:", lowStock.map(p => p.name));

//REDUCE - Reduce to single value
console.log("\n--- REDUCE ---");

// Sum of numbers
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// Product of numbers
const product = numbers.reduce((acc, n) => acc * n, 1);
console.log("Product:", product);

// Total inventory value
const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);
console.log("Total inventory value:", totalValue);

// Most expensive product
const mostExpensive = products.reduce((max, p) => 
    p.price > max.price ? p : max
);
console.log("Most expensive:", mostExpensive.name, "$" + mostExpensive.price);

// Group by category
const groupedByCategory = products.reduce((groups, p) => {
    if (!groups[p.category]) {
        groups[p.category] = [];
    }
    groups[p.category].push(p.name);
    return groups;
}, {});
console.log("Grouped by category:", groupedByCategory);

// COMBINING METHODS
// Get total value of electronics
const electronicsValue = products
    .filter(p => p.category === "Electronics")
    .reduce((sum, p) => sum + (p.price * p.stock), 0);
console.log("Electronics total value:", electronicsValue);

// Get average price of expensive products (> $100)
const avgExpensivePrice = products
    .filter(p => p.price > 100)
    .reduce((acc, p, _, arr) => acc + p.price / arr.length, 0);
console.log("Average expensive product price:", avgExpensivePrice.toFixed(2));

// FIND - Find first match
const firstExpensive = products.find(p => p.price > 500);
console.log("First expensive product:", firstExpensive);

// SOME and EVERY
const hasExpensive = products.some(p => p.price > 1000);
const allInStock = products.every(p => p.stock > 0);
console.log(`Has product > $1000: ${hasExpensive}`);
console.log(`All products in stock: ${allInStock}`);

// Sort numbers
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("Sorted ascending:", sortedNumbers);
console.log("Sorted descending:", [...numbers].sort((a, b) => b - a));

// Sort products by price
const byPriceAsc = [...products].sort((a, b) => a.price - b.price);
console.log("Products by price (low to high):", 
    byPriceAsc.map(p => `${p.name}: $${p.price}`));

// Sort products by name
const byName = [...products].sort((a, b) => a.name.localeCompare(b.name));
console.log("Products by name:", byName.map(p => p.name));

