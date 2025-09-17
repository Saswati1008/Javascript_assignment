const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python']
}

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": ["HTML","CSS","JavaScript"],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML","CSS","JavaScript","Redux",
            "MongoDB","Express","React","Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": ["HTML","CSS","JavaScript","React","Redux"],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": ["HTML","CSS","JavaScript","Python"],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": ["HTML","CSS","JavaScript","React","Redux","Node.js"],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": ["HTML","CSS","JavaScript","React"],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": ["HTML","CSS","JavaScript","MongoDB","Express","React","Node"],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`;

// 1. Stringify skills array
let skillsJSON = JSON.stringify(skills)
console.log(skillsJSON) // '["HTML","CSS","JS","React","Node","Python"]'

// 2. Stringify age variable
let ageJSON = JSON.stringify(age)
console.log(ageJSON) // '250'

// 3. Stringify isMarried variable
let isMarriedJSON = JSON.stringify(isMarried)
console.log(isMarriedJSON) // 'true'

// 4. Stringify student object
let studentJSON = JSON.stringify(student)
console.log(studentJSON)
let limitedStudentJSON = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 2)
console.log(limitedStudentJSON)

const users = JSON.parse(txt)
console.log(users)

let mostSkilledUser = ''
let maxSkills = 0

for (let user in users) {
  let skillsCount = users[user].skills.length
  if (skillsCount > maxSkills) {
    maxSkills = skillsCount
    mostSkilledUser = user
  }
}

console.log(`The most skilled user is ${mostSkilledUser} with ${maxSkills} skills.`)
