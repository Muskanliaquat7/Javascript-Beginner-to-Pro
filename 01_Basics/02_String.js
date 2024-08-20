// String is a data type of javascript

// strings are created by enclosing text in either double quotes (" "), single quotes (' '), or backticks (` `).

// Creating String:

/* let doubleString = "this is a string";
let singleString = 'this is a string';
let templateLeteralString = `this is a string`;

console.log(doubleString);
console.log(singleString);
console.log(templateLeteralString); */

//======= Strings Methods =======\\


/* String Length */

// (To find out how many characters are in a string, use the .length property):

/*
 let example = "Hello, World!";
console.log(example.length); //13
 */


/* Concatenating Strings */

// You can join two or more strings together using the + operator or the concat() method:

/*
 let firstName = "Muskan"
let surName = "Liaquat"
let fullName = firstName + surName;
let fullName2 = firstName.concat(surName);

console.log(fullName);
console.log(fullName2); */


/* Template Literals */
// template leterals is also used to add string variables like we do in concatenation but it is the updated method.

/* let name = "Bob";
let greeting = `Hello, ${name}!`; // "Hello, Bob!"
 */


/* Escaping Characters */
// If you need to include special characters like quotes within your string, use a backslash (\) to escape them:

/* let quote = "He said \"javascript is awesome!\"";
let statement = "Oh wow! \"It's my favourite dessert\", He asked. "
console.log(quote);
console.log(statement); */


/* Finding a Substring */
// To check if a string contains another string, use includes():

/* let motivation = "Don't wait for the perfect moment, take the moment and make it perfect."

let hasMoment = motivation.includes("moment");
let hasPerfect = motivation.includes("are");

console.log(hasMoment); //true
console.log(hasPerfect); //false */

// To find the position of a substring within a string, use indexOf() or lastIndexOf():

/* let position = motivation.indexOf("the");
console.log(position);

let lastPosition = motivation.lastIndexOf("make")
console.log(lastPosition); */


/* Extracting a Substring */
/* 
There are several methods to extract parts of a string:

slice(startIndex, endIndex): Extracts from startIndex to endIndex (not inclusive).
substring(startIndex, endIndex): Similar to slice().
substr(startIndex, length): Extracts length characters starting from startIndex. */

/* let sentence = "The quick brown fox jumps over the lazy dog.";
let quick = sentence.slice(4, 9); // "quick"
let fox = sentence.substring(16, 19); // "fox"
let lazy = sentence.substr(31, 4); // "lazy" */


/* Changing Case */

// To convert a string to uppercase or lowercase, use toUpperCase() and toLowerCase():

/* let text = "Hello, World!";
let upperText = text.toUpperCase(); // "HELLO, WORLD!"
let lowerText = text.toLowerCase(); // "hello, world!"
 */

/* Trimming Whitespace */
/* To remove whitespace from the beginning and end of a string, use trim(). To trim only from the start or end, use trimStart() and trimEnd(): */

/* let text = "   Hello, World!   ";
let trimmedText = text.trim(); // "Hello, World!"
 */


/* Repeating Strings */
// To split a string into an array of substrings, use split():

/* let text = "apple, banana, cherry";
let fruits = text.split(", "); // ["apple", "banana", "cherry"]
 */



