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

/* let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

comp.splice(2,1,"Ola")

console.log(comp);
 */


// iii) add amazon at the end
/* 
let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

comp.push("amazon"); //push method adds element to the last in array
console.log(comp);
 */


// Methods In Array 

/* // 1. push
// used to add value at the end of an Array 

let item = ["cup", "cat", "laptop", "mic"];

//if we want to add value we can use .push method

// to add an value first put array in a new variable to store new value 

items = item.push("lamp");

//noe print the array to see new value 

console.log(item); // ['cup', 'cat', 'laptop', 'mic', 'lamp']

//  ye orginal array mein change lata ha means agar push method sey kuch add kareygy to wo orignal array me add hoga 
 */


/* 
// 2.pop
// it is used to remove value at the end of an array 

let item = ["cup", "cat", "laptop", "mic"];

// to remove a value first put array in a new variable to store new value 
items = item.pop();

console.log(item); // ['cup', 'cat', 'laptop']

 */

/* 
// 3. unshift()
// it is used to add value to the start of an array 
let item = ["cup", "cat", "laptop", "mic"];

items = item.unshift("banana");

console.log(item); // ['bnana', 'cup', 'cat', 'laptop', 'mic']
 */



/* 
// 4.shift()
// it is used to remove value to remove 

let item = ["cup", "cat", "laptop", "mic"];

items = item.unshift();

console.log(item); // ['cup', 'cat', 'laptop', 'mic']
 */



/* 
// 5. toString
// it is used to convert an array to a String

let item = ["cup", "cat", "laptop", "mic"];

//before converting array to string the output is 
console.log(item); // ['cup', 'cat', 'laptop', 'mic']

//after converting array to string the output is 
console.log(item.toString()); // cup,cat,laptop,mic

// the diffrence of before and after to string method is in square brackets and quotes 

// but this method dont change original array

 */

/* 
// 6. concat()
// it is used to concat/sum one or more arrays

// first declare two array

let item1 = ["can", "cup" , "lamp"];

let item2 = ["laptop", "ice", "cloud"];

//now to concatinate them together we have to write array one name then dot concat (.concat) then second array name then print it 
//we can also store it in a variable then print it 

 console.log(item1.concat(item2)); //['can', 'cup', 'lamp', 'laptop', 'ice', 'cloud']

 //remember this cannot change the original array 

  */

/*  
//  7. slice()
// it is used to return a piece of an array 
//by declaring index/position of array values

//lets say we have a array and i want some piece of it 

let comfort = ["rain", "clouds", "tea", "coffee"];

//start slice by giving index no
console.log(comfort.slice(2,4)); //['tea', 'coffee']
 
//now the note point is that ke last index of value is non-exclusive means lasat index pe jo value hoti ha wo count nahi hoti.
 */


// 8.splice()
//it change original array 
//it is used to change, add, replace value in an array.

//  arr.splice( start index,delete index,new value )


/* 
// Add value
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//first we add the starting position from where we have to delete and then kaha tak delete karna ha third me jo new value add karni ha 
arr.splice( 3, 0, 111 );

 console.log(arr); //[1, 2, 3, 111, 4, 5, 6, 7, 8, 9, 10]
 */


/*  
// Remmove value 
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr2.splice(3, 1);

console.log(arr2); // [1, 2, 3, 6, 7, 8, 9, 10]

 */


/* 
// replace value 

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr3.splice(2,1,44);

console.log(arr3);
 */