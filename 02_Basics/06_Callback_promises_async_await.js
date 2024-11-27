function bakeCake(callback) {
    console.log("Cake oven me daal diya...");
    
    // Cake bake hone me time lagega (simulating with setTimeout)
    setTimeout(() => {
      console.log("Cake bake ho gaya!");
      callback(); // Yahan callback function chal raha hai
    }, 3000);
  }
  
  function decorateCake() {
    console.log("Ab hum cake decorate karenge!");
  }
  
  // Function call karte hain
  bakeCake(decorateCake);
  