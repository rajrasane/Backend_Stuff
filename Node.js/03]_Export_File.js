// Export Files in Node.js

// - Exporting in Node.js allows sharing functions, objects, or values from one file to another.

//---------------------------------------------------------------------------------------------------------------------------------------

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

// 3) Importing: Use require() to import modules in other files.
// for e.g:-
// app.js
const math = require('./math');
console.log(math.add(5, 3)); // Output: 8

//---------------------------------------------------------------------------------------------------------------------------------------


// Good Practices :-

// Use named exports for clarity.
// Use default export for single values.
// Organize code into modules for maintainability


//---------------------------------------------------------------------------------------------------------------------------------------

