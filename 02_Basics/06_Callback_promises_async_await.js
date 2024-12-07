/* function khanaBanao(callback) {
  console.log("Khana bana raha hoon...");
  setTimeout(() => {
      console.log("Khana tayar hai!");
      callback(); // Callback function ko call kiya ja raha hai
  }, 2000);
}

function khanaKhao() {
  console.log("Khana khane laga hoon...");
}

// Call karte hain
khanaBanao(khanaKhao); */

// output:
// Khana bana raha hoon...
// (2 second baad)
// Khana tayar hai!
// Khana khane laga hoon...

// Example #2
/* 
//Greeting Based on Time
function greetUser(callback) {
  console.log("Let's greet user");
  callback()
  
}

function morningGreeting() {
  console.log("Good Morning! Let's wakeup and get success.");
  
}

function eveningGreeting() {
  console.log("Good Evening! Let's have  a tea time.");
  
}


greetUser(morningGreeting);

greetUser(eveningGreeting);
 */

// Example #3
// 3. Math Operations with Callbacks
/* 
function calculate(num1, num2, operation){
  console.log("Let's start calculating...");
  const result = operation(num1, num2); //calling callback
  console.log(`Result: ${result}`);
  
}

function add(a, b) {
  return a + b;
  
}

function subtract(a, b) {
  return a - b;
  
}

function multiply(a, b) {
  return a * b;
  
}

function divide(a, b) {
  return a / b;
  
}

// Addition
calculate(5, 10, add);

// Multiplication
calculate(5, 10, multiply); */

// Example #4
// 3. Timer ke Saath Task
/* 
function timer( delay, callback){
  console.log(`Timer set for ${delay / 1000} seconds...`);
  setTimeout(() => {
    console.log("timer complete!");
    callback();
  }, delay);
  
}

function showMessage() {
  console.log("This message is showing after the timer.");
  
}

timer ( 4000, showMessage); */

// # Callback Hell:
// when you write callbacks inside each function 

// Example #!
/* function fetchUser(callback){
  setTimeout(() => {
    console.log("User fetched");
    callback();
    
  }, 1000);
}

function processUserData(callback){
  setTimeout(() => {
    console.log("User data processed");
    callback();
  }, 1000);
}

function saveResult(callback){
  setTimeout(() => {
    console.log("Result saved");
    callback();
  }, 1000);
}

function showSuccessMessage() {
  setTimeout(() => {
    console.log("Success message shown");
    
  }, 1000);
} */

// Callback Hell 

/* fetchUser(function () {
  processUserData( function(){
    saveResult(function(){
      showSuccessMessage();
    })
  })
})
 */

// Issues
// it makes code complicated
// makes difficult to handle errors


