function khanaBanao(callback) {
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
khanaBanao(khanaKhao);

