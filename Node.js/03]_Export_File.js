// Export Files in Node.js

// - Exporting in Node.js allows sharing functions, objects, or values from one file to another.

//---------------------------------------------------------------------------------------------------------------------------------------

// Exporting:- 

// 1) Named Exports: Use module.exports or exports to export individual functions or values.

// for e.g:-
// math.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;


// 2) Default Export: Use module.exports to export a single default value, like an object or function.

// for e.g:-
// utils.js
module.exports = {
    greet: () => console.log("Hello"),
    goodbye: () => console.log("Goodbye")
  };

//---------------------------------------------------------------------------------------------------------------------------------------

// Importing:- 

// - loading is synchronous for `require` but can be asynchronous for `import`

// 1].require() 

// for e.g:-
let obj = {     //<- This code is written in math.js file 
  sum : sum,
  mul : mul,
  g : g,
  PI : PI
};

module.exports = obj;   //<- This is how we export thorugh one file

const math = require('./math');        //<- This is how we import the module using require

console.log(math.add(5, 3)); // Output: 8

//---------------------------------------------------------------------------------------------------------------------------------------

// 2].import()
// - with import() we can selectively import the things we want to use rather than getting the whole thing , which can save memory  

// for e.g:-
export const sum = (a,b) => a+b;    //<- This code is written in math.js file 
export const mul = (a,b) => a*b;
export const g = 9.8;
export const PI = 3.14;

import {sum,PI} from "./math.js";

console.log(sum(1,2));
// - for this to work we must add/include a key value pair of "type" : "module" in a newly created package.json file in our main directory.

//---------------------------------------------------------------------------------------------------------------------------------------


// Good Practices :-

// Use named exports for clarity.
// Use default export for single values.
// Organize code into modules for maintainability


//---------------------------------------------------------------------------------------------------------------------------------------

