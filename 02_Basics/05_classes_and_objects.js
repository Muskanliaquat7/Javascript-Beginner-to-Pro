// JavaScript Object Example
/* let Car = {
    brand: "mercedes",
    color: "white",
    speed: "200"
};

console.log(Car); //print whole object
console.log(Car.brand); //print just brand
console.log(Car.color); //print just color */

// JavaScript Class Example
// class creates a blue print used to create objects.
// we create class and create objects from it.

/* class car  {
    constructor(brand, color, speed) {

        this.brand = brand;
        this.color = color;
        this.speed = speed;
    
    }
} */

// constructor is a special type of function that sets properties in it.


// #Creating objects using class

/* let car1 = new car("mercedes", "white", 200); //New car object
console.log(car1); */

//creatinf 2nd object using car class.
/* let car2 = new car("BMW", "Black", 120);
console.log(car2); */


// Methods in Class
// If you want to do something with a car, like drive or stop, you use methods.

/* class Car {
    constructor(brand, color, speed) {
      this.brand = brand;
      this.color = color;
      this.speed = speed;
    }

    drive() {
        console.log(` ${this.brand} is driving at ${this.speed} km/hr. `);
        
    }

    stop(){
        console.log(`${this.brand} has stopped.`);
        
    }

} */

/* let car3 = new Car ("haval", "Black", 80);

car3.drive(); // haval is driving at 80 km/hr.
car3.stop(); //haval has stopped. */


// #Inheritance in JavaScript
// Inheritance allows one class (child) to use the properties and methods of another class (parent). It helps in reusability and makes the code clean and organized.

// Basic Example:

/* class Animal {
    constructor(name, sound) {

        this.name = name; //sets property
        this.sound = sound; 

    }

    //using method 

    makeSound() {
        console.log(`${this.name} make a ${this.sound} sound.`);
        
    }
} */


/* 
// now creating child class
class Dog extends Animal {
    //declaring method/function
    fetch(){
        console.log(`${this.name} loves to fetch a ball`);
        
    }
}

const dog = new Dog("Buddy", "Bark");

// now calling  it.
dog.makeSound(); //Buddy make a Bark sound.
dog.fetch();   //Buddy loves to fetch a ball
 */

// Super() In Js
// Without super(), the child class cannot access the parent constructor, and it will throw an error.
// Must Call super() First in Child Constructor:

/* class Parent {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hello, I am ${this.name}.`);
    }
  }
  
  class Child extends Parent {
    constructor(name, age) {
      super(name); // Call the Parent's constructor
      this.age = age; // Add child-specific property
    }
  
    introduce() {
      console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const child = new Child("Emily", 12);
  child.greet();      // Hello, I am Emily.
  child.introduce();  // Hi, I am Emily and I am 12 years old.
   */

  