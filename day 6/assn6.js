const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

let mernStack = ['MongoDB', 'Express', 'React', 'Node']



// for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// do...while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);


// for loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// while loop
let k = 10;
while (k >= 0) {
  console.log(k);
  k--;
}

// do...while loop
let l = 10;
do {
  console.log(l);
  l--;
} while (l >= 0);


let n = 7;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}


for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}


console.log("i   i^2   i^3");
for (let i = 0; i <= 10; i++) {
  console.log(i, " ", i ** 2, "  ", i ** 3);
}


for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}


for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) console.log(i);
}


for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log("The sum of all numbers from 0 to 100 is", sum);


let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}
console.log(`The sum of evens is ${evenSum}. The sum of odds is ${oddSum}.`);


console.log([evenSum, oddSum]);  


let randomNums = [];
for (let i = 0; i < 5; i++) {
  randomNums.push(Math.floor(Math.random() * 100)); 
}
console.log(randomNums);

let uniqueNums = [];

while (uniqueNums.length < 5) {
  let num = Math.floor(Math.random() * 100); // random number 0–99
  if (!uniqueNums.includes(num)) {
    uniqueNums.push(num);
  }
}

console.log(uniqueNums);

let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let id = "";

for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * chars.length);
  id += chars.charAt(randomIndex); // using charAt()
}

console.log("Random ID:", id);

let length = 10;
let randomId = "";

for (let i = 0; i < length; i++) {
  randomId += chars.charAt(Math.floor(Math.random() * chars.length));
}

console.log("Random ID:", randomId);

let hexColor = "#";

for (let i = 0; i < 6; i++) {
 randomNum= Math.floor(Math.random() *17)
 hexColor += randomNum.toString(16);
}

console.log("Random Hex Color:", hexColor);

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

console.log(`rgb(${r},${g},${b})`);

let upperCountries = [];

for (let i = 0; i < countries.length; i++) {
  upperCountries.push(countries[i].toUpperCase());
}

console.log(upperCountries);

let countryLengths = [];

for (let i = 0; i < countries.length; i++) {
  countryLengths.push(countries[i].length);
}

console.log(countryLengths);

let countryData = [];

for (let i = 0; i < countries.length; i++) {
  let name = countries[i];
  countryData.push([name, name.slice(0, 3).toUpperCase(), name.length]);
}

console.log(countryData);

let landCountries = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().includes("land")) {
    landCountries.push(countries[i]);
  }
}
  console.log(landCountries);

  let iaCountries = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().endsWith("ia")) {
    iaCountries.push(countries[i]);
  }
}
  console.log(iaCountries);

  let longest = countries[0];

for (let i = 1; i < countries.length; i++) {
  if (countries[i].length > longest.length) {
    longest = countries[i];
  }
}

console.log("Longest country:", longest);

let fiveCharCountries = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    fiveCharCountries.push(countries[i]);
  }
}

console.log(`Countries with 5 characters:${fiveCharCountries}`);
longest = webTechs[0];

for (let i = 1; i < webTechs.length; i++) {
  if (webTechs[i].length > longest.length) {
    longest = webTechs[i];
  }
}

console.log("Longest tech:", longest);

let techData = [];

for (let i = 0; i < webTechs.length; i++) {
  techData.push([webTechs[i], webTechs[i].length]);
}

console.log(techData);


 mernStack = ["MongoDB", "Express", "React", "Node"];
let acronym = "";

for (let i = 0; i < mernStack.length; i++) {
  acronym += mernStack[i][0];
}

console.log("MERN:", acronym);




for (let tech of webTechs) {
  console.log(tech);
}

let fruits = ['banana', 'orange', 'mango', 'lemon'];
let reversed = [];

for (let i = fruits.length - 1; i >= 0; i--) {
  reversed.push(fruits[i]);
}

console.log(reversed);


const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}
// LEVEL THREE

let copiedCountries = countries.slice();  
let sortedCountries = copiedCountries.sort();

console.log("Original countries:", countries);
console.log("Sorted countries:", sortedCountries)


let sortedWebTechs = webTechs.slice().sort();
let sortedMernStack = mernStack.slice().sort();

console.log("Sorted webTechs:", sortedWebTechs);
console.log("Sorted MERN stack:", sortedMernStack);

let fourCharCountries = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 4) {
    fourCharCountries.push(countries[i]);
  }
}
console.log("Countries with 4 characters:", fourCharCountries);
let multiWordCountries = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].split(" ").length >= 2) {
    multiWordCountries.push(countries[i]);
  }
}
console.log("Countries with two or more words:", multiWordCountries);


let reversedCapitalized = [];
for (let i = countries.length - 1; i >= 0; i--) {
  reversedCapitalized.push(countries[i].toUpperCase());
}
console.log("Reversed and capitalized countries:", reversedCapitalized);
