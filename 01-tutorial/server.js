/*
The global object utilizes the function global.require() to import modules.
*/
const os = require('os')
const path = require('path')
const { add, subtract, multiply, divide } = require('./math')


/*
This is a global object similar to the window object in the browser.
*/
console.log(global)
console.log(__dirname)
console.log(__filename)


/* 
Example of desctructuring math.js functions.
*/
console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))


/*
The os module provides operating system-related utlitiy methods and properties
*/
console.log(os.type())
console.log(os.version())
console.log(os.homedir())


/*
The path module provides utilities for working with file and directory paths.
*/
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))