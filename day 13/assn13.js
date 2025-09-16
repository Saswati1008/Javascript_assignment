const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.table(countries);
const countryObj = {
  Finland: { capital: "Helsinki", population: 5.5 },
  Sweden: { capital: "Stockholm", population: 10.3 },
  Norway: { capital: "Oslo", population: 5.4 },
  Denmark: { capital: "Copenhagen", population: 5.8 },
  Iceland: { capital: "Reykjavik", population: 0.37 },
};
console.table(countryObj);
console.group("Countries");
console.log("Finland");
console.log("Sweden");
console.log("Norway");
console.groupEnd();

console.assert(10 > 2 * 10, "Assertion failed: 10 is NOT greater than 20");

console.warn("This is a warning:");
console.error("This is an error: Something went wrong!");

const countries1 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.time("Regular for loop");
for (let i = 0; i < countries1.length; i++) {
  console.log(countries1[i][0], countries1[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countries1) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries1.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");
