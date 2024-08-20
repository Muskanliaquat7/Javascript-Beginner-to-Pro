
 /* Note: month zero-based hota hai, matlab January 0 hota hai aur December 11 hota hai. Is liye 7 August ko represent karta hai. */
 /* 
 let myDate = new Date()
console.log(myDate); //prints date with current time 
 */

/* Using its properties  */

// console.log(myDate.toDateString()); 
//just print date without time

// console.log(myDate.toLocaleString()); 
/* ye method tumhare local settings ke hisaab se date aur time ko format karta hai. */

// console.log(myDate.toTimeString()); 
//Ye method sirf time ko dikhata hai, date nahi.

// console.log(myDate.toUTCString()); 
/* ye method date aur time ko UTC timezone ke hisaab se format karta hai.  Ye time zone hai jisse duniya bhar ke time zones ko compare kiya ja sakta hai. */

// console.log(myDate.toISOString()); 
/* Ye method date aur time ko ISO format mein dikhata hai, jo commonly use hota hai data interchange ke liye aur machine redable format key liye. */

// console.log(myDate.getTime());
/* "The getTime() method returns the number of milliseconds since January 1, 1970, because January 1, 1970 is used as a standard reference point (epoch) to make time calculations consistent across different systems." */

// console.log(myDate.getFullYear());
//Ye method 4-digit year return karta hai.

// console.log(myDate.getMonth());
//month ki counting zero sey start hoti ha isiliye ye aik month pichy print karega

// console.log(myDate.getDay());
/* week ka day return karta hai (Sunday = 0, Monday = 1, etc.). */

// console.log(myDate.getHours());
/* Ye method hour in 24-hour format return karta hai. */

// console.log(myDate.getMinutes());
/* Ye method minutes return karta hai. */

// console.log(myDate.getSeconds());
/* Ye method current seconds ko return karta hai. */

/* Set Date and Time */
/* 
let date = new Date();
date.setFullYear(2027);
console.log(date);
//Ye method year ko set karta hai 

date.setMonth(11); // December
console.log(date);
//Ye method month ko set karta hai aur optional day bhi set kiya ja sakta hai.

date.setDate(25);
console.log(date);
//Ye method day of the month ko set karta hai.
 */

/* OR COMBINE SET DATE */

/* let date2 = new Date();

// Set karte hain specific values
date2.setFullYear(2025);
date2.setMonth(11); // December
date2.setDate(25);
date2.setHours(10);
date2.setMinutes(30);
date2.setSeconds(45);

console.log(date2);

 */