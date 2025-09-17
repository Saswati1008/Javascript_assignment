function outerFunction() {
    let count = 0;
    function plusOne() {
        count++;
        return count;
    }
    return plusOne; 
}
const innerFunc = outerFunction(); 

console.log(innerFunc()); 
console.log(innerFunc()); 
console.log(innerFunc()); 

function outerFunction1(){
  let count = 1; // variable in the outer scope

  function plusone(){
    count++;
    return count;
  }

  function multiple(){
    count = count * 2;
    return count;
  }

  function minusone(){
    count--;
    return count;
  }

  return {
    plusone: plusone,
    multiple: multiple,
    minusone: minusone
  }
}

const innerFuncs = outerFunction1();

console.log(innerFuncs.plusone());
console.log(innerFuncs.minusone());
console.log(innerFuncs.multiple());

console.log(innerFuncs.plusone());
console.log(innerFuncs.minusone());
console.log(innerFuncs.multiple());

function personAccount(firstName, lastName) {

    let incomes = [];   
    let expenses = [];  
   
    function totalIncome() {
        return incomes.reduce((sum, income) => sum + income.amount, 0);
    }

    function totalExpense() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    function accountInfo() {
        return `
        Name: ${firstName} ${lastName}
        Total Income: ${totalIncome()}
        Total Expense: ${totalExpense()}
        Account Balance: ${accountBalance()}
        `;
    }

    function addIncome(amount, description) {
        incomes.push({ amount, description });
    }

    function addExpense(amount, description) {
        expenses.push({ amount, description });
    }

    return {
        totalIncome,
        totalExpense,
        accountBalance,
        accountInfo,
        addIncome,
        addExpense
    };
}


const myAccount = personAccount("John", "Doe");

myAccount.addIncome(5000, "Salary");
myAccount.addIncome(200, "Freelance");
myAccount.addExpense(150, "Groceries");
myAccount.addExpense(50, "Transport");

console.log(myAccount.totalIncome());     
console.log(myAccount.totalExpense());   
console.log(myAccount.accountBalance());   
console.log(myAccount.accountInfo());

