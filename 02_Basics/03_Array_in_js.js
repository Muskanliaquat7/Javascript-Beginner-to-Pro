// Array in js
//collection of items 

//make an array 
//array is declare in side square bracket!

/* let marks = ["99", "44", "54", "78", "89", "94"];

//printing the array
console.log(marks);

//output: ['99', '44', '54', '78', '89', '94']
 */



// length property:
// just like string array also have length property.
//property is just information(ye sirf hume kisi bhi array ki info deti ha)

//implementing length property

/* let marks = ["99", "44", "54", "78", "89", "94"];

// it is declared by " . "

console.log(marks.length); //6
 */

// note: length of array always will be plus one of array length 



/* // Array type?
//checking array type
let marks = ["99", "44", "54", "78", "89", "94"];

// by typeof
console.log(typeof marks); //object
 */


/* // Array indices(array position)
let marks = ["99", "44", "54", "78", "89", "94"];

//checking index/indices of array marks
console.log(marks[1]); //44

//note: index will always start from 0 in javascript thath why when i write 1 inside msrks[1] it gives 44 */

/* //how to excess array indices/index in javascript?

 //lets first declare an array 
let marks = ["99", "44", "54", "78", "89", "94"];

// now checking array index

console.log(marks[3]); //78

//we can also change array index value in array originally 

//firstly we put index no and give it new value 
marks[3] = "55"
//now log it  and value will change originally 
console.log(marks[3]); //55

//if we print complete array it will give new value of index 3

console.log(marks); //['99', '44', '54', '55', '89', '94']
 */

//note: now array is immutable in javascript thats why we can change its original value

//looping over an Array

/* // looping over for-loop Array 

//1. declare array 
let marks = ["99", "44", "54", "78", "89", "94"];

//2. declare for-loop
for (let i = 0; i < marks.length; i++) {
    
    console.log(marks[i]);
      
}

//things to remember in for loop of array

// * initialization condition will always be zero (i=0)
// * arraylength always be less than sign from i because as is say before that array length is one plus of array length 
 */

/* //Looping Array over for-of Loop 
//well generally we use for-of loop for looping an array 

//declare an array 
let marks = ["99", "44", "54", "78", "89", "94"];

//declare for-of loop 

// declare variable inside the parenthesis ()
// element could be any keyword bc its a variable

for (let  element of marks) {
    console.log(element); //in log we can give variable name not array name to print arrays
    
}
 */
