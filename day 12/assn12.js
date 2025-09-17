let text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."

let numbers = text.match(/\d+/g).map(Number)
console.log(numbers) 

let [salaryPerMonth, annualBonus, coursePerMonth] = numbers

let totalIncome = (salaryPerMonth * 12) + annualBonus + (coursePerMonth * 12)
console.log("Total Annual Income:", totalIncome)


let pointsText = "-12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction";
let points = pointsText.match(/-?\d+/g).map(Number).sort((a, b) => a - b);
console.log("Sorted Points:", points);
let distance = points[points.length - 1] - points[0];
console.log("Distance between furthest particles:", distance);


function is_valid_variable(name) {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name);
}
console.log(is_valid_variable("first_name"));   
console.log(is_valid_variable("first-name"));   
console.log(is_valid_variable("1first_name"));
console.log(is_valid_variable("firstname"));


function tenMostFrequentWords(text, topN = 10) {
  let words = text.toLowerCase().match(/\b\w+\b/g); // extract words
  let freqMap = {};

  for (let word of words) {
    freqMap[word] = (freqMap[word] || 0) + 1;
  }

  let sorted = Object.entries(freqMap)
    .sort((a, b) => b[1] - a[1])
    .map(([word, count]) => ({ word, count }));

  return sorted.slice(0, topN);
}

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

console.log("All frequent words:", tenMostFrequentWords(paragraph));
console.log("Top 10 frequent words:", tenMostFrequentWords(paragraph, 10));

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(text) {
  return text.replace(/[%$@&#;!?]/g, "");
}

  let cleanedText = cleanText(sentence);
console.log("Cleaned Text:\n", cleanedText);

function mostFrequentWords(text, topN = 3) {
  let words = text.match(/\b\w+\b/g);
  let freqMap = {};

  for (let word of words) {
    freqMap[word] = (freqMap[word] || 0) + 1;
  }

  let freqArray = [];
  for (let word in freqMap) {
    freqArray.push({ word: word, count: freqMap[word] });
  }

  freqArray.sort((a, b) => b.count - a.count);

  return freqArray.slice(0, topN);
}
console.log("Top 3 frequent words in cleaned text:", mostFrequentWords(cleanedText, 3));