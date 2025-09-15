import { countries } from './countries.js';
import {  webTechs } from './webtech.js';

// 1. Declare an empty array
let emptyArray = [];
console.log(emptyArray);

// 2. Declare an array with more than 5 elements
let numbers = [10, 20, 30, 40, 50, 60, 70];
console.log(numbers);

// 3. Find the length of your array
console.log(numbers.length);

// 4. Get first, middle, last item
console.log("First item:", numbers[0]);
console.log("Middle item:", numbers[Math.floor(numbers.length / 2)]);
console.log("Last item:", numbers[numbers.length - 1]);

// 5. Mixed data types array
let mixedDataTypes = ["Saswati", 21, true, null, 3.14, { city: "Bhubaneswar" }, [1,2,3]];
console.log(mixedDataTypes);
console.log("Length:", mixedDataTypes.length);

// 6. IT companies array
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);

// 7. Number of companies
console.log("Number of companies:", itCompanies.length);

// 8. First, middle, last company
console.log("First company:", itCompanies[0]);
console.log("Middle company:", itCompanies[Math.floor(itCompanies.length / 2)]);
console.log("Last company:", itCompanies[itCompanies.length - 1]);

// 9. Print each company
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

// 10. Change each company name to uppercase
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

// 11. Print array as sentence
console.log(itCompanies.slice(0, itCompanies.length-1).join(", ") + " and " + itCompanies[itCompanies.length-1] + " are big IT companies.");

// 12. Check if a company exists
let companyToCheck = "Google";
if (itCompanies.includes(companyToCheck)) {
  console.log(companyToCheck);
} else {
  console.log("Company not found");
}

// 13. Companies with more than one 'o' without filter
for (let company of itCompanies) {
  let count = 0;
  for (let char of company.toLowerCase()) {
    if (char === 'o') count++;
  }
  if (count > 1) {
    console.log(company);
  }
}


// 14. Sort the array
console.log(itCompanies.sort());

// 15. Reverse the array
console.log(itCompanies.reverse());

// 16. Slice first 3 companies
console.log(itCompanies.slice(0,3));

// 17. Slice last 3 companies
console.log(itCompanies.slice(-3));

// 18. Slice middle company or companies
let midIndex = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
  console.log(itCompanies.slice(midIndex-1, midIndex+1)); // 2 middle for even length
} else {
  console.log(itCompanies[midIndex]); // 1 middle for odd length
}

// 19. Remove first IT company
itCompanies.shift();
console.log(itCompanies);

// 20. Remove middle IT company or companies
midIndex = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
  itCompanies.splice(midIndex-1, 2);
} else {
  itCompanies.splice(midIndex, 1);
}
console.log(itCompanies);

// 21. Remove last IT company
itCompanies.pop();
console.log(itCompanies);

// 22. Remove all IT companies
itCompanies = [];
console.log(itCompanies);

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words=text.split(" ")
console.log(words)
console.log(words.length)

//  shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
let hasmeat=false
for (let items of shoppingCart){

  if(items.toLowerCase()==='meat'){
hasmeat=true
  }
}
if(!hasmeat){
  shoppingCart.unshift("Meat")
}
console.log(shoppingCart);

const  duplshoppingcart=[]
for(let items of shoppingCart ){
 duplshoppingcart.push(items.toLowerCase())
}
 if(!duplshoppingcart.includes('sugar')){
shoppingCart.push("Sugar")
 }
console.log(shoppingCart);
  const allergic =true;
  if (allergic){
    shoppingCart.pop();
  }

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';

console.log(shoppingCart);


let found = false;

for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase() === 'ethiopia') {
    console.log('ETHIOPIA');
    found = true;
    break;
  }
}

if (!found) {
  countries.push('Ethiopia');
}

console.log(countries);


for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].toLowerCase() === 'Saas') {
    console.log('Sass is a CSS preprocess');
    found = true;
    break;
  }
}

if (!found) {
  countries.push('Sass');
}

console.log(webTechs);


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd)

console.log(fullStack)

// LEVEL THREE
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort((a, b) => a - b);  // sort in ascending order
let minAge = ages[0];
let maxAge = ages[ages.length - 1];

console.log("Sorted ages:", ages);
console.log("Min age:", minAge);
console.log("Max age:", maxAge);
let median;
let mid = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {
  median = (ages[mid - 1] + ages[mid]) / 2; // average of two middle values
} else {
  median = ages[mid];
}

console.log("Median age:", median);
let sum = 0;
for (let age of ages) {
  sum += age;
}
let average = sum / ages.length;

console.log("Average age:", average);

let range = maxAge - minAge;
console.log("Range:", range);


let minDiff = Math.abs(minAge - average);
let maxDiff = Math.abs(maxAge - average);

console.log("|Min - Avg|:", minDiff);
console.log("|Max - Avg|:", maxDiff);


let firstTen = countries.slice(0, 10);
console.log("First 10 countries:", firstTen);

midIndex = Math.floor(countries.length / 2);
if (countries.length % 2 === 0) {
 console.log( countries.splice(midIndex-1, 2));
} else {
  console.log(countries[midIndex]);
}

 mid = Math.floor(countries.length / 2);

let firstHalf, secondHalf;

if (countries.length % 2 === 0) {
  
  firstHalf = countries.slice(0, mid);
  secondHalf = countries.slice(mid);
} else {
 
  firstHalf = countries.slice(0, mid+ 1);
  secondHalf = countries.slice(mid + 1);
}

console.log("First Half:", firstHalf);
console.log("Second Half:", secondHalf);