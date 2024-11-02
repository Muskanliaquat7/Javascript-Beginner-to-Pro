// Function
// is a piece of code that performs a specific task
//jab bhi hume wo work karwana hoga to hum call kar ke karwate hain
//functions hum aik bar create kar ke koi bhi kam bar bar karwa skty hain by just calling it

// like this;

// Function Definition:
/* 
function funcName(){
    //do the work 
}

//steps: function keyword, function name (could be any name), parenthesis(), curly bracket which is known as block of code 

// Function call/invoke:

funcName();

// we can call function by writing function name with parenthesis 
 */
/* 
// #lets create function

function myfunc(){

    console.log("this is function");
    
}

// now it wont print it until we call it by:

myfunc(); //this is function
 */

// #Defining inputs in parenthesis
// JavaScript mein functions ek recipe ki tarah hoti hain. Jaise ek recipe ko kuch ingredients ki zarurat hoti hai (jaise doodh, anday, aur cheeni) waise hi functions ko kuch inputs ki zarurat hoti hai, jinhein hum parameters kehte hain.

// Example:
// Socho tumhe aik juice banaane ka function likhna hai. Jab tak tum usme fruit ka naam nahi bataogi, wo kaise decide karega konsa juice banana hai? 🤔

/* function makeJuice(fruit){
    console.log(fruit, "juice is ready");
    
} */

// Breakdown:
// fruit: Yeh ek parameter hai. Yeh bata raha hai ke function ko kis fruit ka juice banana hai.
// Jab tum function call karogi, tum kuch input bhejogi jo parameter ke jagah par aayega.

// if we call function

/* makeJuice("Apple");  // Output: Apple juice ban gaya! 🧃
makeJuice("Mango");  // Output: Mango juice ban gaya! 🧃
 */

//    Q: Parameters kyu likhtay hain?
// Har dafa alag input dene ka option milta hai.
// Reusability: Ek hi function ko bohot baar use kar sakti ho, bus input alag dogi aur output bhi alag hoga.

// #Example2:
// Socho tumhe do numbers ka sum (jama) nikalna hai. Hum is kaam ke liye ek function banate hain aur parameters ka use karte hain.

/* function sum(x, y){
    console.log(x + y);
    
}

// calling it with inputs/ argument

sum(4, 5); //9
sum(100, 300); //400 */

// #return  In Function
// JavaScript mein return ka use hum kisi function se result ya output wapas lene ke liye karte hain. Jab ek function koi calculation ya kaam complete karta hai, return ke zariye wo apna result bahar bhejta hai, taake hum us result ko kahin aur bhi use kar saken — jaise ek variable mein store karna, ya kisi aur function ko dena.

// #Example:

// Shopping Bill Function with Return:

/* 
function calculateBill (item, price, quantity){
   let  total = price * quantity;  // Har item ka total price calculate ho raha hai
   return `Bill for ${item} is ${total}-/ rupees.`;

}
 */
//price * quantity ka matlab hai, hum har item ka total nikaal rahe hain.
//return yaha par total bill wapas de raha ha take hum use function ke bahaer kahin bhi kisi ke liye bhi use karsky

// #call function
// isko kisi bhi variable mein call karna ha just aur phir jab bhi out put lena ho means print karna ho kisi aur function me use karna ho to var sey kengy

/* 
let bill1 = calculateBill("shampoo", 899,2 );
let bill2 = calculateBill("pizza", 1245,2 );

// hum isko alert me bhi show karskty ha without even closing it in a variable  like this:

alert(calculateBill("Juice", 200, 5));  // Alert: Bill for Juice is: 1000 rupees.

  */

//we can print it or alert it and reuse it out of the functions.

/* 
console.log(bill1); //Bill for shampoo is 1798-/ rupees.
console.log(bill2); //Bill for pizza is 2490-/ rupees.
 
 */

/* 
// Return Ke Bina Kya Hota?
// Agar tum return na karti, aur sirf console.log karti:
function calculateBill(item, price, quantity) {
    let total = price * quantity;
    console.log("Bill for " + item + " is: " + total + " rupees.");
  }
//   Is case mein, bill sirf screen pe show hoga, lekin tum return value ko kahin aur store ya use nahi kar paogi.   
*/

// return ka matlab: Tumhe bill bana ke diya gaya, ab tum usko kahin bhi use kar sakti ho (SMS bhejna, print karna, ya kisi aur function mein dena).
//
// Agar return nahi hota, toh bill bas screen pe show hota hai, aur baad mein uska koi kaam nahi rehta.


// # Arrow function in javascript 
// + it is new Es6 feature of advance javascript 
// + it made function consice and easy to read 

// # 1. Basic syntax 
/* 
const funcName = (parameters) =>{
  //do some work 
}
 */
// + in arrow function we store function name in const 
// + in arrow function we write arrow (=>) other than function

// # 2. Arrow function without parameters ()
/* 
const funcName2 =() => {

  console.log("hello");
  
}

//calling it 
funcName2(); //hello
 */

// # 3. Funcitons with parameters 
// lets sum functions by using params

/* const sum = (x, y) => {
  return x + y;

}
 */
// sum(5,9); //it gives no output bcs we call it but did'nt pront it by console.log or alert we just return it 

// + so in order to  pront the sum  of any 2 numbers and print it in console.log we have to log it 

// console.log(sum(40,50)); //90

// # 4. Multiply using parameters

/* const multiply  = (x, y) => {
  return x * y;
} */

// multiply(5,5); //it also gives no output bcs we call it but did'nt pront it by console.log or alert we just return it 

// + so in order to  pront the sum  of any 2 numbers and print it in console.log we have to log it there also 
// console.log(multiply(40,50)); //2000


// # 5. Single Line Arrow function
// + if function have only single line return  work in function then it is allowed to skip return keyword and curly braces
// + but the bet is that we have to skip both return and curly braces{} if we replace one and write another then it will print undefined

/* const Add = (x,y) => x + y; 
console.log(Add(5,10)); //15 */


// # 6. If parameters does'nt exist in functions
// + if we parameters is not there we can use empty parameters like this with short syntax

/* const greet = () => { console.log("hello ");
}  */

//now call it 
// greet(); //hello 

// # 7. if one parameter exist then parenthesis is optional 
// lets see the example of square

/* const square = num => { return num * num} 

// printing any number square 
console.log(square(4)); //16

  */


/* 
// #Practice Question
// Qs: create a function using the function keyword that takes a string as an argument and returns the numbers of vowels in a string

function countVowel(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  console.log(count);
}

// now call it and print any string that you want to count 

countVowel("helio world"); //4
countVowel("this is javascript"); //5

 */
/* 
// Q2. Create an arrow function to perform the same task 

const countVowel = (str) => {
    let count = 0;
    for (const char of str) {
     
        if (char === "a" || char === "e" ||char === "i" ||char === "o" ||char === "u"  ) {
            count++
        }
    }
    console.log(count);
    
} 

countVowel("welcome"); //3
countVowel("this is javascript"); //5
 */


// Qs. For a given array of numbers, print the square of each value using the for each loop 
/* 
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

num.forEach( function(nums){
  console.log(nums*nums);
  
});  
 */