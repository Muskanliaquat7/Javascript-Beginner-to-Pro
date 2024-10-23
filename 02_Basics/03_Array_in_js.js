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

// Practice question

/* // Qs. for a given array with marks of students find the average marks of the entire class

// 1. declare an array of marks 

let marks = [85, 97, 44, 37, 76, 60];

// 2. now to find sum we can declare a variable of sum and initialize it with 0

let sum = 0;

//3. now to find the sum we can use for-of loop

for(let val of marks){
    sum = sum + val;
}

//4. now to find the average marks we could write the formula of finding average marks which is sum/markslength = avg

let avg = sum/ marks.length;

//5. now we can just print it 
console.log(`the average marks of student is ${avg}`); 
 */


/* 
// Qs2. for a given  Array with prices of items all items have an offer of 10% off on them. change the array to store final price after applying offer

//we can do this question by implementing loops now loop can be any for-of, for. we can do this qs by for loop 

//1. declare an array of price 

let price = [85, 97, 44, 37, 76, 60];

for(let i = 0; i<price.length; i++){

let offer = price[i] / 10 ; //putting the minus 10% formula 

price[i] -= offer; //or price[i] = price[i] + offer;  

}

console.log(price);
 */



// Qs3. Create an array to store companies

// i) Remove the first company from an array 

/* let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

let remove = comp.shift();  //shift ethod delete element from start

console.log(remove); //['Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']
 */

// ii) Remove Ubar and add Ola in its place

let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

comp.splice(2,1,"Ola")

console.log(comp);



// iii) add amazon at the end
/* 
let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

comp.push("amazon"); //push method adds element to the last in array
console.log(comp);
 */

