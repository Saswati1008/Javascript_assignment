// 1. Create an empty object called dog
let dog = {};

// 2. Print the dog object
console.log(dog); // {}

// 3. Add properties: name, legs, color, age, bark
dog.name = "Buddy";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;
dog.bark = function () {
  return "woof woof";
};

// 4. Get name, legs, color, age, and bark value
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

dog.breed = "Labrador";
dog.getDogInfo = function () {
  return `Name: ${this.name}, Breed: ${this.breed}, Color: ${this.color}, Age: ${this.age}, Legs: ${this.legs}`;
};

console.log(dog.getDogInfo());

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
let maxSkills = 0;
let personWithMostSkills = "";

for (let user in users) {
  if (users[user].skills.length > maxSkills) {
    maxSkills = users[user].skills.length;
    personWithMostSkills = user;
  }
}

console.log("Person with most skills:", personWithMostSkills);

let loggedInCount = 0;
let highPointsCount = 0;

for (let user in users) {
  if (users[user].isLoggedIn) loggedInCount++;
  if (users[user].points >= 50) highPointsCount++;
}

console.log("Logged in users:", loggedInCount);
console.log("Users with points >= 50:", highPointsCount);

let mernDevs = [];

for (let user in users) {
  const skills = users[user].skills;
  if (
    skills.includes("MongoDB") &&
    skills.includes("Express") &&
    skills.includes("React") &&
    skills.includes("Node")
  ) {
    mernDevs.push(user);
  }
}

console.log("MERN stack developers:", mernDevs);

const newUsers = { ...users };
newUsers.Saswati = { skills: ["HTML", "CSS"], points: 20, isLoggedIn: true };

console.log(newUsers);

console.log("All keys:", Object.keys(users));
console.log("All values:", Object.values(users));

const countries = {
  India: {
    capital: "New Delhi",
    population: "1.4B",
    languages: ["Hindi", "English"],
  },
  USA: {
    capital: "Washington D.C.",
    population: "331M",
    languages: ["English"],
  },
};

for (let country in countries) {
  console.log(
    country,
    countries[country].capital,
    countries[country].population,
    countries[country].languages
  );
}

let personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes: [{ description: "salary", amount: 5000 }],
  expenses: [{ description: "rent", amount: 2000 }],
  totalIncome: function () {
    let total = 0;
    for (let i of this.incomes) total += i.amount;
    return total;
  },
  totalExpense: function () {
    let total = 0;
    for (let e of this.expenses) total += e.amount;
    return total;
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
  accountInfo: function () {
    return `${this.firstName} ${
      this.lastName
    } has balance ${this.accountBalance()}`;
  },
  addIncome: function (desc, amt) {
    this.incomes.push({ description: desc, amount: amt });
  },
  addExpense: function (desc, amt) {
    this.expenses.push({ description: desc, amount: amt });
  },
};

console.log(personAccount.accountInfo());

const userList = [
  { username: "Alex", isLoggedIn: false },
  { username: "Asab", isLoggedIn: true },
];

function signUp(username) {
  for (let u of userList) {
    if (u.username === username) return "User already exists";
  }
  userList.push({ username: username, isLoggedIn: false });
  return "User added";
}

function signIn(username) {
  for (let u of userList) {
    if (u.username === username) {
      u.isLoggedIn = true;
      return username + " signed in";
    }
  }
  return "User not found";
}

console.log(signUp("Brook"));

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV: Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// Rate a product
function rateProduct(productName, userId, rate) {
  for (let p of products) {
    if (p.name === productName) {
      p.ratings.push({ userId, rate });
      return p;
    }
  }
  return "Product not found";
}

// Average rating of a product
function averageRating(productName) {
  for (let p of products) {
    if (p.name === productName) {
      if (p.ratings.length === 0) return 0;
      let total = 0;
      for (let r of p.ratings) total += r.rate;
      return total / p.ratings.length;
    }
  }
  return "Product not found";
}

// Like/unlike a product
function likeProduct(productName, userId) {
  for (let p of products) {
    if (p.name === productName) {
      const idx = p.likes.indexOf(userId);
      if (idx === -1) p.likes.push(userId); // Like
      else p.likes.splice(idx, 1); // Unlike
      return p.likes;
    }
  }
  return "Product not found";
}

// Test
console.log(rateProduct("Laptop", "newUser", 4));
console.log(averageRating("mobile phone"));
console.log(likeProduct("Laptop", "fg12cy"));
