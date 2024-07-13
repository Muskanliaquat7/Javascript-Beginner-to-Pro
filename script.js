//Primitive Data types in javascript
//which are of 7 types:
//1.null 2.number 3.boolean 4.bigint 5.string 6.symbol 7.undefined

// nn bb ss u (shprtcut to learn primitive data types)

let a = null; //null
let b = 789; //number
let c = true; //can also be false //boolean
let d = BigInt(45) //bigint
let e = "Shelby" //anything written in quotation called string  //String 
let f = Symbol("I am Thomas Shelby") 
let g = undefined //empty 

//we can check it by:

// console.log (a, b, c, d, e, f, g)

//OR
 
console.log(f)

//we can check the type of data types aswell
console.log (typeof c)

//Non-Primitive Data types in Javascript which are Objects:
// Objects are collections of key-value pairs. They can hold any data type, 

const item ={
    name: 'cillian Murphy',
    age: 30,
    isStudent: true,
    city: 'New York',
    country: 'USA'

}

console.log(item["city"])  //New York

// Chapter-1 Practice Set

// Q1. Create a Variable Type string and try to add a Number to it.

let h = "hello";
let i = "7";

console.log(a+b) //hello6

//When you add any thing to string it will concatenate!

// Q2. use type of operator to find the datatype of string in the last question

console.log(typeof h+i)  //string

// Q3. Create a const object in javascript Can you hold it to change a number later

const asset ={
    fullName:"justin",
    isPrinciple: "false",
    marks:"56"
    
}

asset['fullName'] = 'harry' 
            // OR
            asset.marks = '78'; 

//you can change the properties of object in const but you cannot add new properties in it 

// Write a javascript program to create a  word-meaning dictionary of 5 words

// Creating the word-meaning dictionary
const dictionary = {
    "serendipity": "the occurrence and development of events by chance in a happy or beneficial way",
    "ephemeral": "lasting for a very short time",
    "quintessential": "representing the most perfect or typical example of a quality or class",
    "elucidate": "make (something) clear; explain",
    "mellifluous": "sweet or musical; pleasant to hear"
};

console.log(dictionary)  //it will output the whole properties presented in object
        //   OR
console.log(dictionary.elucidate)  //it will output the property written above dot in console.log which is elucidate 
