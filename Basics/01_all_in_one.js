// //Primitive Data types in javascript
// //which are of 7 types:
// //1.null 2.number 3.boolean 4.bigint 5.string 6.symbol 7.undefined

// // nn bb ss u (shprtcut to learn primitive data types)

// let a = null; //null
// let b = 789; //number
// let c = true; //can also be false //boolean
// let d = BigInt(45) //bigint
// let e = "Shelby" //anything written in quotation called string  //String 
// let f = Symbol("I am Thomas Shelby") 
// let g = undefined //empty 

// //we can check it by:

// // console.log (a, b, c, d, e, f, g)

// //OR
 
// console.log(f)

// //we can check the type of data types aswell
// console.log (typeof c)

// //Non-Primitive Data types in Javascript which are Objects:
// // Objects are collections of key-value pairs. They can hold any data type, 

// const item ={
//     name: 'cillian Murphy',
//     age: 30,
//     isStudent: true,
//     city: 'New York',
//     country: 'USA'

// }

// console.log(item["city"])  //New York

// // Chapter-1 Practice Set

// // Q1. Create a Variable Type string and try to add a Number to it.

// let h = "hello";
// let i = "7";

// console.log(a+b) //hello6

// //When you add any thing to string it will concatenate!

// // Q2. use type of operator to find the datatype of string in the last question

// console.log(typeof h+i)  //string

// // Q3. Create a const object in javascript Can you hold it to change a number later

// const asset ={
//     fullName:"justin",
//     isPrinciple: "false",
//     marks:"56"
    
// }

// asset['fullName'] = 'harry' 
//             // OR
//             asset.marks = '78'; 

// //you can change the properties of object in const but you cannot add new properties in it 

// // Write a javascript program to create a  word-meaning dictionary of 5 words

// // Creating the word-meaning dictionary
// const dictionary = {
//     "serendipity": "the occurrence and development of events by chance in a happy or beneficial way",
//     "ephemeral": "lasting for a very short time",
//     "quintessential": "representing the most perfect or typical example of a quality or class",
//     "elucidate": "make (something) clear; explain",
//     "mellifluous": "sweet or musical; pleasant to hear"
// };

// console.log(dictionary)  //it will output the whole properties presented in object
//         //   OR
// console.log(dictionary.elucidate)  //it will output the property written above dot in console.log which is elucidate 


// 1. ARITHMETIC OPERATORS

// 1.Addition (+)
// 2.Subtraction (-)
// 3.Multiplication (*)
// 4.Exponentiation (**)
// 5.Division (/)
// 6.Modulus (%)
// 7.Increment (++)
// 8.Decrement (--)

// let a = 20
// let b = 5

// // The addition operator adds two numbers
// console.log("a+b =", a+b) //Output a+b = 25

// // The subtraction operator subtracts one number from another
// console.log("a-b =", a-b) //Output a-b = 15

// // The multiplication operator multiplies two numbers
// console.log("a*b =", a*b) //Output a*b = 100

// // The exponentiation operator raises the first operand to the power of the second operand
// console.log("a**b =", a**b) //Output a**b = 3200000

// // The division operator divides one number by another.
// console.log("a/b =", a/b) //Output a/b = 4

// // The remainder (or modulus) operator returns the remainder after division of one number by another
// console.log("a%b =", a%b) //Output a%b = 0

// The increment operator increases an integer value by one. 
// It can be used in two forms: prefix and postfix


// // Postfix Increment (x++): Uses the value first and then increments it.
// console.log("a++ =", a++) //Output a++ = 20
// console.log("a =", a) //Output a = 21

// // Prefix Increment (++x): Increments the value before using it.
// console.log("++a =", ++a) //Output ++a = 22
// console.log("a =", a) //Output a = 22

// // The decrement operator decreases an integer value by one. 
// // It can be used in two forms: prefix and postfix.

// // Prefix Decrement (--x): Decrements the value before using it
// console.log("a-- =", a--) //Output a-- = 22
// console.log("a =", a) //Output a = 21

// // Postfix Decrement (x--): Uses the value first and then decrements it.
// console.log("--a =", --a) //Output --a = 20

                        //==============\\

//Assignment Operators

// 1. Basic Assignment Operator (=)
// 2.Addition Assignment (+=)
// 3.Subtraction Assignment (-=)
// 4.Multiplication Assignment (*=)
// 5.Division Assignment (/=)
// 6.Remainder Assignment (%=)
// 7.Exponentiation Assignment (**=)

// let x = 10; //Outputs: 10

// x += 5; // Equivalent to x = x + 5
// console.log(x) // Outputs: 15

// x -= 5; // Equivalent to x = x - 5
// console.log(x) // Outputs: 5


// x *= 5; // Equivalent to x = x * 5
// console.log(x); // Outputs: 50


// x /= 5; // Equivalent to x = x / 5
// console.log(x); // Outputs: 2


// x %= 3; // Equivalent to x = x % 3
// console.log(x); // Outputs: 1


// x **= 5; // Equivalent to x = x ** 3
// console.log(x); // Outputs: 8

            //==============\\\

//Comparison Operators:
//Comparison operators in JavaScript are used to compare two values. These operators return a boolean value (true or false) based on the comparison result. 

// Equality Operators:
// Strict Equality (===)
// Strict Inequality (!==)
// Loose Equality (==)
// Loose Inequality (!=)

//Relational Operators:
// Greater Than (>)
// Greater Than or Equal To (>=)
//Less Than (<)
//Less Than or Equal To (<=)

// Strict Equality
// let a = 10;
// let b = '10';
// console.log(a === b); // Outputs: false

// // Strict Inequality
// console.log(a !== b); // Outputs: true

// // Loose Equality
// console.log(a == b); // Outputs: true

// // Loose Inequality
// console.log(a != b); // Outputs: false

// // Greater Than
// let x = 7;
// let y = 5;
// console.log(x > y); // Outputs: true

// // Greater Than or Equal To
// console.log(x >= y); // Outputs: true
// console.log(y >= y); // Outputs: true

// // Less Than
// console.log(x < y); // Outputs: false

// // Less Than or Equal To
// console.log(x <= y); // Outputs: false
// console.log(y <= y); // Outputs: true

                //============\\

//Logical operators:
// Logical operators in JavaScript are used to combine multiple conditions or expressions and return a boolean value (true or false).

// 1. Logical AND (&&)
// The logical AND operator returns true if both operands are true; otherwise, it returns false.

// let a = true;
// let b = false;

// console.log(a && b); // Outputs: false
// console.log(a && true); // Outputs: true


//==========OR=============\\


//Use Case

/* let age = 18;
let hasdrivinglicense = true;

if (age >=18 && hasdrivinglicense== true) {
    console.log("you can drive.");
} 
else {
    console.log("you cannot drive");
} */
            // Another Example


/* let classTime = prompt("Enter Class Time");
let studentEnter = prompt("When You Enter");

if(classTime>=9 && studentEnter==9){
    console.log("You can Enter");
}
else{
    console.log("Get Out");
} */

//2. Logical OR (||)
// The logical OR operator returns true if at least one of the operands is true; otherwise, it returns false.

// let a = true;
// let b = false;

// console.log (a || b); 
// console.log(b||false);

//==========OR=============\\

/* let age = 16;
let hasParentalConsent = true;

if (age >= 18 || hasParentalConsent) {
    console.log("You can attend the event.");
} else {
    console.log("You cannot attend the event.");
}
Outputs: "You can attend the event." */

// 3. Logical NOT (!)
/* The logical NOT operator inverts the boolean value of its operand. If the operand is true, it returns false, and if the operand is false, it returns true */

/* let a = true;

console.log(!a); // Outputs: false
console.log(!false); // Outputs: true */

//==========OR=============\\

/* let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in.");
} else {
    console.log("Welcome back!");
}
Outputs: "Please log in." */

                //============\\

   
    //=====FUNCTIONS IN JAVASCRIPT=======\\
    
/*     function java (){
        alert("we are learning javascript");
    }

    java()
 */
    //Return 
    
/*     function sub(a,b) {
        console.log("muskan");
        return a-b;
       
    }

   let c = sub (8,9);

   console.log(c);
 */

//    Default parameters

/*    function sub(a=9,b=5) {
    console.log(a-b);
}

sub(15); */

// recursive function

/* function Readdata (data,times){
    document.write(data);
    if(times>0){
        Readdata(data,times)
    }
}

Readdata("muskan"); */

// FACTORIAL function 

/* function factorial (num){
    if (num>1){
        return num * factorial (num-1);
    }

   
        return 1;
    
}

factorial() */

/* global Scope = Whole file
local scope = inside function */

/* 
 */


//Global scope variable

/* let globalVariable = "I'm in the global scope";

function myFunction(){
    let localVariable = " I'm in the local scope";

    //Local scope variable
    console.log(globalVariable);
    console.log(localVariable);
    
}

console.log(globalVariable);
console.log(localVariable);
 */




/* let myArray = [];

myArray.push("table");
myArray.push("Chair");
myArray.push("Bed");

console.log(myArray);

let removed = myArray.pop();

console.log(myArray); */

/* ============================ *\
/* ============= DOM ============= */
/* 
var heading = document.getElementById('myHeading');
var paragraph = document.getElementById('myParagraph');
var button = document.getElementById('styleButton');

function applyStyles() {
    heading.style.color = 'blue';
    heading.style.fontWeight = 'bold';
    heading.style.fontFamily = 'Arial, sans-serif';
    heading.style.textAlign = 'center';

    paragraph.style.color = 'green';
    paragraph.style.fontSize = '18px';
    paragraph.style.margin = '20px';

    button.textContent = 'Styles Applied';
}

button.addEventListener('click', applyStyles);
 */
/* ============= CLOCK ANIMATION SETINTERVAL ============= */

// Create a function to update the clock
/* function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
} */

// This function styles the clock to look nice
/* function styleClock() {
    const clockElement = document.getElementById('clock');
    clockElement.style.fontSize = '3rem';
    clockElement.style.fontFamily = 'Arial, sans-serif';
    clockElement.style.textAlign = 'center';
    clockElement.style.justifyContent = 'center';
    clockElement.style.marginTop = '20%';
    clockElement.style.padding = '20px';
    clockElement.style.backgroundColor = '#333';
    clockElement.style.color = '#fff';
    clockElement.style.borderRadius = '10px';
    clockElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    clockElement.style.display = 'inline-block';
}
 */
// Call the styleClock function to style the clock
// styleClock();

// Set an interval to update the clock every second
/* setInterval(updateClock, 1000);
updateClock(); */ // Initial call to display clock immediately on page load

/* ============= SETINTERVAL-ANIMATION-2 ============= */

// Function to style the box
/* function styleBox() {
    const box = document.getElementById('box');
    box.style.width = '100px';
    box.style.height = '100px';
    box.style.backgroundColor = '#3498db';
    box.style.margin = '50px auto';
    box.style.transition = 'width 0.5s';
} */

// Function to animate the width of the box
/* let growing = true;

function animateWidth() {
    const box = document.getElementById('box');
    let currentWidth = box.offsetWidth;

    if (growing) {
        currentWidth += 10;
        if (currentWidth >= 300) {
            growing = false;
        }
    } else {
        currentWidth -= 10;
        if (currentWidth <= 100) {
            growing = true;
        }
    }

    box.style.width = currentWidth + 'px';
}
 */
// Apply styles when the page loads
/* window.onload = function() {
    console.log('Page loaded');
    const box = document.getElementById('box');
    if (box) {
        console.log('Box found');
        styleBox();
        setInterval(animateWidth, 100);
    } else {
        console.log('Box not found');
    }
} */
