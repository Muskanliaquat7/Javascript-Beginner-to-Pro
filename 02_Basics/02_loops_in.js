//======= loops in js =======\\

// 1.for loop
// for (let  i = 1;  i<=10;  i++ ){
//  console.log("i =", i);
 
// }

// 2. infinite loop
// for (let  i = 1;  i>=0;  i++ ){
//     console.log("i =", i);
//   }

// 3. while loop

// let i= 1;
// while ( i<=10) {
//     console.log("i=", i);
//     i++;
// }

// 4. do-while loop

// let i = 1; 
//  do {
//     console.log("i = ", i);
//     i++
//  } while (i>=10);

// 5.for-of loop
// to iterate on some special data types like string and arrays

// let str = "hello";

// for (let  i  of str) {
//     console.log(i);   
// }

// 6. for-in loop
// to iterate on object key 

//first make an object 
/* let student = {
    name: "cat",
    age: 2,
    isCute: true,
} */

//then access the object key by iterator (i) iterator can be of any names.

/* for (const i in student) {
     console.log(i, student[i]);
}
 */

// PRACTICE QUESTIONS
// Q1. print all even numbers between 0 to 100

/* for (i= 1; i<=100; i++){ if (i %2 ==0) {
    
    console.log(  i);
    
} 
    
} */

// Practice Qs2

// let gameNum = 25;

//  let userNum = prompt("guess the number");

// while ( gameNum != userNum) {
//  userNum =   prompt("you enter wrong number guess again");
// }
// console.log("you guess right");


/* let mess = "my name is \nhenry"
 console.log(mess);
 
let mess2 = `my name is 
henry`
 
console.log(mess2); */

// PRACTICE QUESTION 3

/* let userinp = prompt("enter your fullname");
let length = userinp.length;
 console.log("@".concat(userinp.concat(length)));

 */

//  Task 1: 1 se 10 Tak Numbers Print Karna

/* for (let index = 0; index <= 10; index++) {
console.log(index);
    
} */

// Task 2: Even Numbers Print Karna (1 to 20)

/* for (let index = 0; index <= 20; index++) {
if (index % 2 ==0) {
    console.log(index);
}
    
} */

// Task 3: Numbers ko Reverse Order Mein Print Karna (10 to 1)

/* for (let index = 10; index  >= 0; index--) {
    console.log(index);
    
} */

// Task 4: Array ke Elements ko Print Karna

/* let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];

for (let index = 0; index < fruits.length; index++) {
    console.log( fruits[index]);
    
  
} */

    // Task 5: Sum of Numbers from 1 to 100

/*     let sum = 0;

    for (let index = 0; index < 100; index++) {
       sum = sum + index;
         
    }
    console.log(`The sum is: ${sum}`);
     */