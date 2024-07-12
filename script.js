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


