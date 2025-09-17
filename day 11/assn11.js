const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

// Destructure constants
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

// Destructure countries
const [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)

// Destructure rectangle
const { width, height, area, perimeter } = rectangle
console.log(width, height, area, perimeter)

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// 1. Iterate and get keys
users.forEach(user => {
  const { name, scores, skills, age } = user
  console.log(name, scores, skills, age)
})

// 2. Find persons with less than two skills
const lessThanTwoSkills = users.filter(({ skills }) => skills.length < 2)
console.log(lessThanTwoSkills)

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

const [name, skills, [ , , jsScore, reactScore]] = student
console.log(name, skills, jsScore, reactScore)


const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(arr) {
  return arr.map(([name, skills, scores]) => ({
    name,
    skills,
    scores
  }))
}

console.log(convertArrayToObject(students))


const studentObj = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 }
    ],
    dataBase: [
      { skill: 'MongoDB', level: 7.5 }
    ],
    dataScience: ['Python', 'R', 'D3.js']
  }
}
let newStudent = {
  name: student.name,
  age: student.age,
  skills: {
    frontEnd: [],
    backEnd: [],
    dataBase: [],
    dataScience: []
  }
}


for (let i = 0; i < studentObj.skills.frontEnd.length; i++) {
  let item = studentObj.skills.frontEnd[i]
  newStudent.skills.frontEnd.push({ skill: item.skill, level: item.level })
}


for (let i = 0; i < studentObj.skills.backEnd.length; i++) {
  let item = studentObj.skills.backEnd[i]
  newStudent.skills.backEnd.push({ skill: item.skill, level: item.level })
}

for (let i = 0; i < studentObj.skills.dataBase.length; i++) {
  let item = studentObj.skills.dataBase[i]
  newStudent.skills.dataBase.push({ skill: item.skill, level: item.level })
}

// 5. Copy dataScience (array of strings → use slice or loop)
for (let i = 0; i < studentObj.skills.dataScience.length; i++) {
  newStudent.skills.dataScience.push(studentObj.skills.dataScience[i])
}

// 6. Add new skills
newStudent.skills.frontEnd.push({ skill: 'BootStrap', level: 8 })
newStudent.skills.backEnd.push({ skill: 'Express', level: 9 })
newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 })
newStudent.skills.dataScience.push('SQL')

console.log(newStudent)
