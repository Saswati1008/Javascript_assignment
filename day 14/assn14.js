// Animal Class
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  // method
  describe() {
    return `${this.name} is a ${this.age} year old ${this.color} animal with ${this.legs} legs.`;
  }
}

// Dog class (child)
class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }

  // override
  describe() {
    return `${this.name} is a ${this.age} year old ${this.color} ${this.breed} dog.`;
  }
}

// Cat class (child)
class Cat extends Animal {
  constructor(name, age, color, legs, isIndoor) {
    super(name, age, color, legs);
    this.isIndoor = isIndoor;
  }

  // override
  describe() {
    return `${this.name} is a ${this.age} year old ${this.color} cat and ${this.isIndoor ? 'stays indoors' : 'lives outdoors'}.`;
  }
}

// Test
let dog = new Dog("Bruno", 4, "brown", 4, "Labrador");
let cat = new Cat("Kitty", 3, "white", 4, true);

console.log(dog.describe());
console.log(cat.describe());


class Statistics {
  constructor(data) {
    this.data = data;
  }

  count() {
    return this.data.length;
  }

  sum() {
    return this.data.reduce((a, b) => a + b, 0);
  }

  min() {
    return Math.min(...this.data);
  }

  max() {
    return Math.max(...this.data);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return Math.round(this.sum() / this.count());
  }

  median() {
    let sorted = [...this.data].sort((a, b) => a - b);
    let mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  }

  mode() {
    let freq = {};
    this.data.forEach(num => (freq[num] = (freq[num] || 0) + 1));
    let maxCount = Math.max(...Object.values(freq));
    let mode = Object.keys(freq).find(key => freq[key] === maxCount);
    return { mode: Number(mode), count: maxCount };
  }

  var() {
    let mean = this.mean();
    return this.data.reduce((a, b) => a + (b - mean) ** 2, 0) / this.count();
  }

  std() {
    return Math.sqrt(this.var()).toFixed(1);
  }

  freqDist() {
    let freq = {};
    this.data.forEach(num => (freq[num] = (freq[num] || 0) + 1));
    return Object.entries(freq)
      .map(([num, count]) => [(count / this.count() * 100).toFixed(1), Number(num)])
      .sort((a, b) => b[0] - a[0]);
  }

  describe() {
    return `
Count: ${this.count()}
Sum: ${this.sum()}
Min: ${this.min()}
Max: ${this.max()}
Range: ${this.range()}
Mean: ${this.mean()}
Median: ${this.median()}
Mode: (${this.mode().mode}, ${this.mode().count})
Variance: ${this.var().toFixed(1)}
Standard Deviation: ${this.std()}
Frequency Distribution: ${JSON.stringify(this.freqDist())}
    `;
  }
}

// Test
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);
console.log(statistics.describe());


class PersonAccount {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = [];
    this.expenses = [];
  }

  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  }

  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  }

  totalIncome() {
    return this.incomes.reduce((a, b) => a + b.amount, 0);
  }

  totalExpense() {
    return this.expenses.reduce((a, b) => a + b.amount, 0);
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }

  accountInfo() {
    return `
Account Holder: ${this.firstname} ${this.lastname}
Total Income: ${this.totalIncome()}
Total Expense: ${this.totalExpense()}
Account Balance: ${this.accountBalance()}
    `;
  }
}

// Test
let person = new PersonAccount("Saswati", "Sahoo");
person.addIncome("Salary", 4000);
person.addIncome("Freelancing", 1500);
person.addExpense("Rent", 1200);
person.addExpense("Food", 600);

console.log(person.accountInfo());
