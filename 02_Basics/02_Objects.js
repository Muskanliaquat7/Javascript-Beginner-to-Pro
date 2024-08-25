
//Declaring Object

let dog = {
    name: "buddy",
    age: 3,
    color: "brown",
    bark: function(){
        console.log("Woof, Woof");
        
    }
    };

console.log(dog.bark);

//Declaring Object Properties 
//1. Dot Notation
console.log(dog.name);
//2. Bracket Notation
console.log(dog["name"]);

//Updating Object Properties

dog.age = 5;
console.log(dog);

//Adding New Properties
dog.type = "German Shyphard";
console.log(dog);

