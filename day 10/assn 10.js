const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']


const emptySet = new Set()
console.log(emptySet) 


const numberSet = new Set()
for (let i = 0; i <= 10; i++) {
  numberSet.add(i)
}
console.log(numberSet)


numberSet.delete(5)
console.log(numberSet) 

// 4. Clear a set
numberSet.clear()
console.log(numberSet) 


const stringSet = new Set(countries)
console.log(stringSet)

const countryMap = new Map()
countries.forEach(c => countryMap.set(c, c.length))
console.log(countryMap)

let setA = new Set(a)
let setB = new Set(b)


let union = new Set([...a, ...b])
console.log(union) 


let intersection = new Set(a.filter(num => setB.has(num)))
console.log(intersection) 


let difference = new Set(a.filter(num => !setB.has(num)))
console.log(difference) 


