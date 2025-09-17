// Level 1
localStorage.setItem("firstName", "Saswati");
localStorage.setItem("lastName", "Sahoo");
localStorage.setItem("age", 21);
localStorage.setItem("country", "India");
localStorage.setItem("city", "Bhubaneswar");

console.log(localStorage);

const my_info = {
    fname: 'Saswati',
    lname: 'Sahoo',
    age: 22,
    country: 'India',
    city: 'Jajpur'
};

const Info = JSON.stringify(my_info);
console.log("Original object:", my_info);


localStorage.setItem('My_info', Info);


const storedInfo = localStorage.getItem('My_info');
console.log("Stored JSON string:", storedInfo);


const parsedInfo = JSON.parse(storedInfo);
console.log("Parsed object:", parsedInfo);


// Level 3
const personAccount = {
  firstName: "Saswati",
  lastName: "Sahoo",
  incomes: [
    { description: "Salary", amount: 40000 },
    { description: "Freelance", amount: 15000 }
  ],
  expenses: [
    { description: "Rent", amount: 8000 },
    { description: "Food", amount: 5000 }
  ],

  totalIncome: function () {
    return this.incomes.reduce((sum, inc) => sum + inc.amount, 0);
  },
  totalExpense: function () {
    return this.expenses.reduce((sum, exp) => sum + exp.amount, 0);
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
  accountInfo: function () {
    return `${this.firstName} ${this.lastName} - Balance: ${this.accountBalance()} INR`;
  },
  addIncome: function (desc, amt) {
    this.incomes.push({ description: desc, amount: amt });
  },
  addExpense: function (desc, amt) {
    this.expenses.push({ description: desc, amount: amt });
  }
};

localStorage.setItem("personAccount", JSON.stringify(personAccount));

// Retrieve back
const storedAccount = JSON.parse(localStorage.getItem("personAccount"));
console.log(storedAccount);
