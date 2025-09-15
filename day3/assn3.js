// Declare variables
let firstName = "Saswati";
let lastName = "Sahoo";
let country = "India";
let city = "Bhubaneswar";
let age = 21;
let isMarried = false;
let year = 2025;

// typeof checks
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// '10' vs 10
console.log(typeof '10' == typeof 10);   // false
console.log(Number('10') === 10);        // true

// parseInt('9.8') vs 10
console.log(parseInt('9.8') === 10);     // false

// Boolean values
// Truthy
console.log(1);          // truthy
console.log("Hello");    // truthy
console.log(true);       // truthy

// Falsy
console.log(0);          // falsy
console.log("");         // falsy
console.log(null);       // falsy

// Comparison results
console.log(4 > 3);      // true
console.log(4 >= 3);     // true
console.log(4 < 3);      // false
console.log(4 <= 3);     // false
console.log(4 == 4);     // true
console.log(4 === 4);    // true
console.log(4 != 4);     // false
console.log(4 !== 4);    // false
console.log(4 != '4');   // false
console.log(4 == '4');   // true
console.log(4 === '4');  // false

// python vs jargon length
console.log('python'.length !== 'jargon'.length); // falsy statement

// Logical operators
console.log(4 > 3 && 10 < 12);   // true
console.log(4 > 3 && 10 > 12);   // false
console.log(4 > 3 || 10 < 12);   // true
console.log(4 > 3 || 10 > 12);   // true
console.log(!(4 > 3));           // false
console.log(!(4 < 3));           // true
console.log(!(false));           // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4'));        // true

// dragon vs python
console.log(!('dragon'.includes('on') && 'python'.includes('on'))); // false

// Date object
let now = new Date();
console.log(now.getFullYear());   // year today
console.log(now.getMonth() + 1);  // month today
console.log(now.getDate());       // date today
console.log(now.getDay());        // day number
console.log(now.getHours());      // hours now
console.log(now.getMinutes());    // minutes now
console.log(Math.floor(now.getTime() / 1000)); // seconds since 1970



// Triangle area
let base = prompt("Enter base:");
let height = prompt("Enter height:");
console.log("The area of the triangle is", 0.5 * base * height);

// Triangle perimeter
let a = prompt("Enter side a:");
let b = prompt("Enter side b:");
let c = prompt("Enter side c:");
console.log("The perimeter of the triangle is", Number(a) + Number(b) + Number(c));

// Rectangle area & perimeter
let length = prompt("Enter length:");
let width = prompt("Enter width:");
console.log("Area:", length * width);
console.log("Perimeter:", 2 * (Number(length) + Number(width)));

// Circle area & circumference
let r = prompt("Enter radius:");
console.log("Area:", 3.14 * r * r);
console.log("Circumference:", 2 * 3.14 * r);

// Line equation y = 2x - 2
let slope1 = 2;
console.log("Slope from y=2x-2:", slope1);

// Slope between points (2,2) and (6,10)
let slope2 = (10 - 2) / (6 - 2);
console.log("Slope between points:", slope2);

// Compare slopes
console.log("Slopes equal?", slope1 === slope2);



// Quadratic y = x^2 + 6x + 9
let x = -3;
let y = x * x + 6 * x + 9;
console.log("y when x=-3:", y); // 0

// Weekly pay
let hours = prompt("Enter hours:");
let rate = prompt("Enter rate per hour:");
console.log("Your weekly earning is", hours * rate);

// Name length check
let name = "Saswati";
if (name.length > 7) {
  console.log("Your name is long");
} else {
  console.log("Your name is short");
}

// Compare first and last name
let fName = "Asabeneh";
let lName = "Yetayeh";
if (fName.length > lName.length) {
  console.log(`Your first name, ${fName} is longer than your family name, ${lName}`);
} else {
  console.log(`Your family name, ${lName} is longer than your first name, ${fName}`);
}

// Age difference
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`);

// Driving age check
let birthYear = prompt("Enter birth year:");
let currentYear = new Date().getFullYear();
let userAge = currentYear - birthYear;
if (userAge >= 18) {
  console.log(`You are ${userAge}. You are old enough to drive.`);
} else {
  console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`);
}

// Life seconds
let years = prompt("Enter number of years you live:");
console.log("You lived", years * 365 * 24 * 60 * 60, "seconds.");

// Human readable time format (normal)
let d = new Date();
console.log(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`);
console.log(`${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`);
console.log(`${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`);

// Human readable time with two-digit hour and minute
let now2 = new Date();
let year2 = now2.getFullYear();
let month2 = now2.getMonth() + 1;
if (month2 < 10) month2 = "0" + month2;

let date2 = now2.getDate();
if (date2 < 10) date2 = "0" + date2;

let hours2 = now2.getHours();
if (hours2 < 10) hours2 = "0" + hours2;

let minutes2 = now2.getMinutes();
if (minutes2 < 10) minutes2 = "0" + minutes2;

console.log(`${year2}-${month2}-${date2} ${hours2}:${minutes2}`);
// Example output: 2025-09-15 09:07
