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

class Car {
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

}

let car3 = new Car ("haval", "Black", 80);

car3.drive(); // haval is driving at 80 km/hr.
car3.stop(); //haval has stopped.

