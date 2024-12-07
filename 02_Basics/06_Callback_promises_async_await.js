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

// Promise In Js
// it came to solve the problem of callback hell

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Work Done");
  }, 2000);
});

// Promises ke saath hum .then() aur .catch() ka use karte hain.

// then(): Jab promise resolve ho jaye, iska kaam karega.
// catch(): Agar promise reject ho jaye, iska kaam karega.

myPromise
  .then((message) => {
    console.log("Success:", message); //Success: Work Done
  })
  .catch((error) => {
    console.log("Error:", error);
  });

  // Step 5: Ek reject example samajhte hain
  // Agar kaam fail ho jaye, to hum reject use karte hain:

  const myPromise2 = new Promise ((resolve, reject ) => {
    const success = true;
    if (success) {
      console.log("successful");
      
    } else{
      console.log("failed");
      
    }
  })

  myPromise2.then((message) => {
    console.log("Success:", message);
    
  }).catch((error) => {
    console.log("Error:", error);
    
  })

  // Promises asynchronous kaam ko samajhne aur handle karne ke liye easy aur readable banate hain.
  // Agar promises na ho to humein callback hell ka samna karna padta hai.

  // Example without promises (Callback Hell)
  setTimeout(() => {
    console.log("work1 done");
    setTimeout(() => {
      console.log("work2 done");
      setTimeout(() => {
        console.log("work3 done");
        
      }, 1000);
    }, 1000);
  },1000)

  // Step 7: Advanced Use (Chaining)
  // Promises ko chain karke ek kaam ke baad doosra kaam kar sakte hain.

const myPromise3 = new Promise ((resolve, reject ) => {
  resolve(10); //first work
});

myPromise3.then((num) => {
  console.log("Number:", num); //10
  return num * 2; //second work 
}).then((num) => {
  console.log("Double:", num); //20
  return num * 3;
  
}).then((num) => {
  console.log("Triple:", num); //60
    
})

const marks = new Promise((resolve, reject) => {
  const marks = 80;
  if (marks > 40) {
    resolve("Pass")
  } else {
    reject("fail")
  }
})

marks.then((mark) => {
  console.log("Result:", mark);
  
}).catch((mark) => {
  console.log("Result:", mark);
  
})