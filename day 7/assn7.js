function fullName() {
  console.log("Saswati Sahoo");
}

fullName();
function fullName2(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(fullName2("Saswati", "Sahoo"));

function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 10));

function areaOfRectangle(length, width) {
  return length * width;
}

console.log(areaOfRectangle(5, 10));

function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

console.log(perimeterOfRectangle(5, 10));

function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

console.log(volumeOfRectPrism(2, 3, 4));

function areaOfCircle(radius) {
  return 3.14 * radius * radius;
}

console.log(areaOfCircle(5));

function circumOfCircle(radius) {
  return 2 * 3.14 * radius;
}

console.log(circumOfCircle(5));

function density(mass, volume) {
  return mass / volume;
}

console.log(density(10, 2));

function speed(distance, time) {
  return distance / time;
}

console.log(speed(100, 2));

function weight(mass, gravity) {
  return mass * gravity;
}

console.log(weight(10, 9.8));

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(convertCelsiusToFahrenheit(30));

function bmi(weight, height) {
  return weight / (height * height);
}

console.log(bmi(50, 1.55));

function checkBmiCategory(weight, height) {
  let bmiValue = weight / (height * height);
  if (bmiValue < 18.5) {
    return "Underweight";
  } else if (bmiValue < 25) {
    return "Normal weight";
  } else if (bmiValue < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(checkBmiCategory(50, 1.55));

function findMax(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

function checkSeason(month) {
  month = month.toLowerCase();
  switch (month) {
    case "september":
    case "october":
    case "november":
      return "Autumn";
    case "december":
    case "january":
    case "february":
      return "Winter";
    case "march":
    case "april":
    case "may":
      return "Spring";
    case "june":
    case "july":
    case "august":
      return "Summer";
    default:
      return "Invalid month";
  }
}

console.log(checkSeason("April")); // Spring

function solveLinEquation(a, b, c, y) {
  return (-c - b * y) / a;
}

console.log(solveLinEquation(2, 3, -6, 1));

function solveQuadratic(a, b, c) {
  let discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return "No real roots";
  } else if (discriminant === 0) {
    return -b / (2 * a);
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  }
}

console.log(solveQuadratic(1, 4, 4));
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray([1, 2, 3, 4]);

function showDateTime() {
  let now = new Date();
  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  console.log(day + "/" + month + "/" + year + " " + hours + ":" + minutes);
}

showDateTime();

function swapValues(x, y) {
  let temp = x;
  x = y;
  y = temp;
  console.log("x =", x, "y =", y);
}

swapValues(3, 4);

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(reverseArray([1, 2, 3, 4]));

function capitalizeArray(arr) {
  let capitalized = [];
  for (let i = 0; i < arr.length; i++) {
    capitalized.push(arr[i].toUpperCase());
  }
  return capitalized;
}

console.log(capitalizeArray(["hello", "world"]));

function addItem(arr, item) {
  arr.push(item);
  return arr;
}

console.log(addItem([1, 2, 3], 4));

function removeItem(arr, index) {
  arr.splice(index, 1);
  return arr;
}

console.log(removeItem([1, 2, 3, 4], 2));

function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) sum += i;
  return sum;
}

console.log(sumOfNumbers(5));
function sumOfOdds(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 2) sum += i;
  return sum;
}

console.log(sumOfOdds(10));
function sumOfEven(n) {
  let sum = 0;
  for (let i = 0; i <= n; i += 2) sum += i;
  return sum;
}

console.log(sumOfEven(10));

function evensAndOdds(n) {
  let evens = 0,
    odds = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) evens++;
    else odds++;
  }
  console.log("The number of evens are", evens);
  console.log("The number of odds are", odds);
}

evensAndOdds(100);

function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
function randomUserIp() {
  return `${Math.floor(Math.random() * 256)}.${Math.floor(
    Math.random() * 256
  )}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

console.log(randomUserIp());

function randomMacAddress() {
  let chars = "0123456789ABCDEF";
  let mac = "";
  for (let i = 0; i < 12; i++) {
    mac += chars.charAt(Math.floor(Math.random() * 16));
    if (i % 2 === 1 && i !== 11) mac += ":";
  }
  return mac;
}

console.log(randomMacAddress());

function randomHexaNumberGenerator() {
  let chars = "0123456789abcdef";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += chars.charAt(Math.floor(Math.random() * 16));
  }
  return hex;
}

console.log(randomHexaNumberGenerator());

function userIdGenerator() {
  let id = "";
  for (let i = 0; i < 7; i++) {
    id += Math.floor(Math.random() * 36).toString(36);
  }
  return id;
}

console.log(userIdGenerator());

// function userIdGeneratedByUser() {
// //   let length = prompt("Enter the number of characters for each ID:");
// //   let count = prompt("Enter the number of IDs to generate:");
//  for (let i = 0; i < count; i++) {
// let id = "";
//   for (let i = 0; i < length; i++) {
//     id += Math.floor(Math.random() * 36).toString(36);
//   }

//  console.log([id]);
// }
// }
// userIdGeneratedByUser();

function rgbColorGenerator() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

console.log(rgbColorGenerator());

function arrayOfHexaColors(num) {
  let colors = [];
  let hex = "0123456789ABCDEF";
  for (let i = 0; i < num; i++) {
    let color = "#";
    for (let j = 0; j < 6; j++) {
      color += hex.charAt(Math.floor(Math.random() * 16));
    }
    colors.push(color);
  }
  return colors;
}

console.log(arrayOfHexaColors(3));

function arrayOfRgbColors(num) {
  let colors = [];
  for (let i = 0; i < num; i++) {
    colors.push(rgbColorGenerator());
  }
  return colors;
}

console.log(arrayOfRgbColors(3));

function convertHexaToRgb(hex) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  return "rgb(" + r + "," + g + "," + b + ")";
}

console.log(convertHexaToRgb("#ee33df"));
function shuffleArray(arr) {
  let newArr = arr.slice(); // copy array
  for (let i = newArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  }
  return newArr;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

function isEmpty(value) {
  if (value === undefined || value === null || value === "") return true;
  return false;
}

console.log(isEmpty("")); // true
console.log(isEmpty("Hi")); // false

function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // 10

function sumOfArrayItems(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "Array contains non-number values";
    }
    total += arr[i];
  }
  return total;
}

console.log(sumOfArrayItems([1, 2, 3, 4]));

function average(arr) {
  let total = sumOfArrayItems(arr);
  return total / arr.length;
}

console.log(average([1, 2, 3, 4]));
function modifyArray(arr) {
  if (arr.length < 5) return "Not Found";
  arr[4] = arr[4].toUpperCase();
  return arr;
}

console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));
function allUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return false;
    }
  }
  return true;
}

console.log(allUnique([1, 2, 3]));
console.log(allUnique([1, 2, 2]));
function allSameType(arr) {
  let type = typeof arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== type) return false;
  }
  return true;
}

console.log(allSameType([1, "2", 3]));
function isValidVariable(name) {
  let pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return pattern.test(name);
}

console.log(isValidVariable("myVar"));
function sevenRandomNumbers() {
  let nums = [];
  while (nums.length < 7) {
    let n = Math.floor(Math.random() * 10);
    if (!nums.includes(n)) {
      nums.push(n);
    }
  }
  return nums;
}

console.log(sevenRandomNumbers());
function reverseCountries(countries) {
  let copy = countries.slice();
  let reversed = [];
  for (let i = copy.length - 1; i >= 0; i--) {
    reversed.push(copy[i]);
  }
  return reversed;
}

console.log(reverseCountries(["Finland", "Sweden", "Norway"]));
