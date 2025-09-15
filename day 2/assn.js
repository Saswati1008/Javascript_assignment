// Declare a variable named challenge
let challenge = '30 Days Of JavaScript';

// Print the string
console.log(challenge);

// Print the length of the string
console.log(challenge.length);

// Change all characters to uppercase
console.log(challenge.toUpperCase());

// Change all characters to lowercase
console.log(challenge.toLowerCase());

// Cut the first word using substr() or substring()
console.log(challenge.substr(3, 4));       // "Days"
console.log(challenge.substring(3, 7));    // "Days"

// Slice out 'Days Of JavaScript'
console.log(challenge.substr(3));          // "Days Of JavaScript"
console.log(challenge.substring(3));       // "Days Of JavaScript"

// Check if string contains word 'Script'
console.log(challenge.includes('Script')); // true

// Split string into array
console.log(challenge.split());            // ["30 Days Of JavaScript"]

// Split string by space
console.log(challenge.split(' '));         // ["30", "Days", "Of", "JavaScript"]

// Split companies string
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));         // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

// Replace 'JavaScript' with 'Python'
console.log(challenge.replace('JavaScript', 'Python')); // "30 Days Of Python"

// Character at index 15
console.log(challenge.charAt(15));         // "S"

// Character code of 'J'
console.log(challenge.charCodeAt(challenge.indexOf('J'))); // 74

// First occurrence of 'a'
console.log(challenge.indexOf('a'));       // 4

// Last occurrence of 'a'
console.log(challenge.lastIndexOf('a'));   // 14

// Sentence with 'because'
let sentence = 'You cannot end a sentence with because because because is a conjunction';

// First occurrence of 'because'
console.log(sentence.indexOf('because'));  // 31

// Last occurrence of 'because'
console.log(sentence.lastIndexOf('because')); // 47

// Search method for 'because'
console.log(sentence.search('because'));   // 31

// Trim whitespace
let trimExample = ' 30 Days Of JavaScript ';
console.log(trimExample.trim());           // "30 Days Of JavaScript"

// startsWith()
console.log(challenge.startsWith('30'));   // true

// endsWith()
console.log(challenge.endsWith('JavaScript')); // true

// match() for all 'a'
console.log(challenge.match(/a/g));        // ["a", "a", "a"]

// concat()
let firstPart = '30 Days Of';
let secondPart = ' JavaScript';
console.log(firstPart.concat(secondPart)); // "30 Days Of JavaScript"

// repeat()
console.log(challenge.repeat(2));          // "30 Days Of JavaScript30 Days Of JavaScript"


// 1. Print John Holmes quote
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. Print Mother Teresa quote
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

// 3. Check if typeof '10' is exactly equal to 10
console.log(typeof '10' === 10); // false
console.log(Number('10') === 10); // true

// 4. Check if parseFloat('9.8') is equal to 10
console.log(parseFloat('9.8') === 10); // false
console.log(Math.round(parseFloat('9.8')) === 10); // true

// 5. Check if 'on' is found in both python and jargon
console.log('python'.includes('on')); // true
console.log('jargon'.includes('on')); // true

// 6. Check if 'jargon' is in the sentence
let sentence1= 'I hope this course is not full of jargon';
console.log(sentence1.includes('jargon')); // true

// 7. Generate random number between 0 and 100
console.log(Math.floor(Math.random() * 101));

// 8. Generate random number between 50 and 100
console.log(Math.floor(Math.random() * 51) + 50);

// 9. Generate random number between 0 and 255
console.log(Math.floor(Math.random() * 256));

// 10. Access 'JavaScript' characters using a random number
let language = 'JavaScript';
let randomIndex = Math.floor(Math.random() * language.length);
console.log(language[randomIndex]);

// 11. Print pattern using escape characters
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// 12. Slice out 'because because because'
let longSentence = 'You cannot end a sentence with because because because is a conjunction';
let phrase = 'because because because';
console.log(longSentence.substr(longSentence.indexOf(phrase), phrase.length));


// 1. John Holmes quote
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. Mother Teresa quote
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

// 3. Check if typeof '10' is exactly equal to 10
console.log(typeof '10' === 10);           // false
console.log(Number('10') === 10);          // true

// 4. Check if parseFloat('9.8') equals 10
console.log(parseFloat('9.8') === 10);     // false
console.log(Math.round(parseFloat('9.8')) === 10); // true

// 5. Check if 'on' is found in both python and jargon
console.log('python'.includes('on'));      // true
console.log('jargon'.includes('on'));      // true

// 6. Check if 'jargon' is in the sentence
let sentence2 = 'I hope this course is not full of jargon';
console.log(sentence2.includes('jargon'));  // true

// 7. Random number between 0 and 100
console.log(Math.floor(Math.random() * 101));

// 8. Random number between 50 and 100
console.log(Math.floor(Math.random() * 51) + 50);

// 9. Random number between 0 and 255
console.log(Math.floor(Math.random() * 256));

// 10. Access random character from 'JavaScript'
let language1 = 'JavaScript';
let randomIndex1 = Math.floor(Math.random() * language1.length);
console.log(language[randomIndex1]);

// 11. Print pattern with escape characters
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// 12. Slice out 'because because because'
let longSentence1 = 'You cannot end a sentence with because because because is a conjunction';
let phrase1 = 'because because because';
console.log(longSentence1.substr(longSentence1.indexOf(phrase1), phrase1.length));
