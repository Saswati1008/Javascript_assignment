// Driving age check
let age = prompt("Enter your age:");
if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  console.log(`You are left with ${18 - age} years to drive.`);
}


// Compare myAge and yourAge
let myAge = 25;
let yourAge = prompt("Enter your age:");
if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (yourAge < myAge) {
  console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
  console.log("We are the same age!");
}


// Compare a and b (two ways)
let a = 4;
let b = 3;

// Using if...else
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

// Using ternary operator
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);


  // Check even or odd
let num = prompt("Enter a number:");
if (num % 2 === 0) {
  console.log(`${num} is an even number`);
} else {
  console.log(`${num} is an odd number`);
}


// Grade checker
let score = prompt("Enter your score:");
if (score >= 80 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 70 && score <= 89) {
  console.log("Grade: B");
} else if (score >= 60 && score <= 69) {
  console.log("Grade: C");
} else if (score >= 50 && score <= 59) {
  console.log("Grade: D");
} else if (score >= 0 && score < 50) {
  console.log("Grade: F");
} else {
  console.log("Invalid score");
}

// Season checker using switch
let month = prompt("Enter month:").toLowerCase();
 switch (month){
   case "september":
  case "october":
  case "november":
    console.log("The season is Autumn.");
    break;


    case "december":
  case "january":
  case "february":
    console.log("The season is Winter.");
    break;

    case "march":
  case "april":
  case "may":
    console.log("The season is Spring.");
    break;

  case "june":
  case "july":
  case "august":
    console.log("The season is Summer.");
    break;

  default:
    console.log("Invalid month.");
 }




