/*
Objects, Nested Objects, Methods
Objects in JavaScript:
Collections of key-value pairs

Keys are strings (or Symbols)

Values can be any data type

Can contain functions (methods)

Object Methods:

Object.keys() - Get all keys

Object.values() - Get all values

Object.entries() - Get key-value pairs

Object.assign() - Copy properties

Object.freeze() - Make immutable

Object.seal() - Prevent adding/removing

Property Descriptors:

writable - Can change value

enumerable - Appears in loops

configurable - Can delete/modify
*/

console.log("=".repeat(50));
console.log("OBJECTS - DAY 11");
console.log("=".repeat(50));

// Object literal
const person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    isEmployed: true
};
console.log("Person:", person);

// Using new Object()
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2020;
console.log("Car:", car);

// ACCESSING PROPERTIES
// Dot notation
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);

// Bracket notation
console.log(`City: ${person["city"]}`);
const propertyName = "isEmployed";
console.log(`Employed: ${person[propertyName]}`);

//MODIFYING PROPERTIES
console.log("Before:", person);
person.age = 31;
person["city"] = "Los Angeles";
person.email = "john@email.com";
console.log("After:", person);

// NESTED OBJECTS
const user = {
    name: "Alice",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Boston",
        state: "MA",
        zip: "02101",
        country: "USA"
    },
    contacts: {
        email: "alice@email.com",
        phone: {
            mobile: "555-1234",
            home: "555-5678"
        }
    }
};

console.log("User:", user);
console.log(`City: ${user.address.city}`);
console.log(`Phone: ${user.contacts.phone.mobile}`);

//OBJECT METHODS
const calculator = {
    value: 0,
    add: function(n) {
        this.value += n;
        return this;
    },
    subtract: function(n) {
        this.value -= n;
        return this;
    },
    multiply: function(n) {
        this.value *= n;
        return this;
    },
    getValue: function() {
        return this.value;
    },
    // Shorthand method syntax
    reset() {
        this.value = 0;
        return this;
    }
};
calculator.add(5).multiply(2).subtract(3);
console.log("Calculator result:", calculator.getValue());
calculator.reset();
console.log("After reset:", calculator.getValue());

// OBJECT KEYS, VALUES, ENTRIES
const product = {
    id: 1,
    name: "Laptop",
    price: 999,
    category: "Electronics"
};

console.log("Keys:", Object.keys(product));
console.log("Values:", Object.values(product));
console.log("Entries:", Object.entries(product));

// Iterating over entries
Object.entries(product).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// OBJECT ASSIGN
const defaults = {
    theme: "light",
    language: "en",
    notifications: true
};

const userSettings = {
    theme: "dark",
    language: "es"
};

const settings = Object.assign({}, defaults, userSettings);
console.log("Merged settings:", settings);

// Using spread operator
const settings2 = { ...defaults, ...userSettings };
console.log("Merged with spread:", settings2);

//PRACTICAL EXAMPLES
// User management system
const users = [
    {
        id: 1,
        name: "John",
        age: 28,
        role: "admin",
        permissions: ["read", "write", "delete"]
    },
    {
        id: 2,
        name: "Jane",
        age: 25,
        role: "user",
        permissions: ["read"]
    },
    {
        id: 3,
        name: "Bob",
        age: 32,
        role: "user",
        permissions: ["read", "write"]
    }
];

// Find user by id
function findUserById(id) {
    return users.find(u => u.id === id);
}
console.log("User with id 2:", findUserById(2));

// Get all users with specific role
function getUsersByRole(role) {
    return users.filter(u => u.role === role);
}
console.log("Admins:", getUsersByRole("admin"));

// Add user
function addUser(userData) {
    const newUser = {
        id: users.length + 1,
        name: userData.name,
        age: userData.age || 18,
        role: userData.role || "user",
        permissions: userData.permissions || ["read"]
    };
    users.push(newUser);
    return newUser;
}

addUser({ name: "Alice", age: 27, role: "admin" });
console.log("Users after add:", users);

// 9. DESTRUCTURING
console.log("\n--- DESTRUCTURING ---");

// Object destructuring
const { name, age, city } = person;
console.log(`Destructured: ${name}, ${age}, ${city}`);

// Nested destructuring
const { address: { street, city: userCity } } = user;
console.log(`Street: ${street}, City: ${userCity}`);

// Destructuring with default values
const { email = "no email", phone = "no phone" } = person;
console.log(`Email: ${email}, Phone: ${phone}`);

// Destructuring in function parameters
function displayUser({ name, age, city = "Unknown" }) {
    console.log(`${name} is ${age} years old from ${city}`);
}
displayUser(person);

//OBJECT COMPUTED PROPERTIES
const keyName = "dynamicKey";
const obj = {
    [keyName]: "This is a dynamic property",
    [`${keyName}2`]: "Another dynamic property"
};
console.log(obj);

//OBJECT SHORTHAND
const firstName = "Charlie";
const lastName = "Brown";
const age2 = 25;

// Shorthand when property name matches variable name
const person2 = { firstName, lastName, age2 };
console.log(person2);

// PROPERTY DESCRIPTORS
const config = {};

Object.defineProperty(config, "apiKey", {
    value: "secret-key-123",
    writable: false,
    enumerable: false,
    configurable: false
});

console.log("Config apiKey:", config.apiKey);
console.log("Config keys:", Object.keys(config));

//ADVANCED: USER ROLE SYSTEM
class UserRoleSystem {
    constructor() {
        this.roles = {};
        this.users = {};
    }
    
    createRole(roleName, permissions) {
        this.roles[roleName] = { permissions, users: [] };
        return this;
    }
    
    assignRole(userId, roleName) {
        if (!this.users[userId]) {
            this.users[userId] = { roles: [] };
        }
        this.users[userId].roles.push(roleName);
        this.roles[roleName].users.push(userId);
        return this;
    }
    
    hasPermission(userId, permission) {
        const user = this.users[userId];
        if (!user) return false;
        
        return user.roles.some(roleName => 
            this.roles[roleName].permissions.includes(permission)
        );
    }
    
    getRoleSummary() {
        const summary = {};
        Object.entries(this.roles).forEach(([roleName, data]) => {
            summary[roleName] = {
                permissions: data.permissions,
                userCount: data.users.length,
                users: data.users
            };
        });
        return summary;
    }
}

// Test the role system
const rbac = new UserRoleSystem();
rbac.createRole("admin", ["read", "write", "delete", "manage"]);
rbac.createRole("editor", ["read", "write"]);
rbac.createRole("viewer", ["read"]);

rbac.assignRole(1, "admin");
rbac.assignRole(2, "editor");
rbac.assignRole(3, "viewer");

console.log("User 1 permissions:", {
    read: rbac.hasPermission(1, "read"),
    write: rbac.hasPermission(1, "write"),
    delete: rbac.hasPermission(1, "delete")
});

console.log("Role Summary:", rbac.getRoleSummary());