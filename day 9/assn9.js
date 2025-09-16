const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
import { countries_data } from "./countries_data.js"

const callback = (element) => console.log(element)

countries.forEach(country => console.log(country))
names.forEach(name => console.log(name))
numbers.forEach(num => console.log(num))


const countriesUpper = countries.map(c => c.toUpperCase())
console.log(countriesUpper)
const countriesLength = countries.map(c => c.length)
console.log(countriesLength)
const numbersSquare = numbers.map(n => n ** 2)
console.log(numbersSquare)
const namesUpper = names.map(n => n.toUpperCase())
console.log(namesUpper)
const productPrices = products.map(p => p.price)
console.log(productPrices)

const landCountries = countries.filter(c => c.toLowerCase().includes('land'))
console.log(landCountries)
const sixCharCountries = countries.filter(c => c.length === 6)
console.log( sixCharCountries)
const sixOrMore = countries.filter(c => c.length >= 6)
console.log(sixOrMore)
const startWithE = countries.filter(c => c.startsWith('E'))
console.log(startWithE)
const validPrices = products.filter(p => typeof p.price === 'number' && p.price > 0)
console.log(validPrices)

function getStringLists(arr) {
  return arr.filter(item => typeof item === 'string')
}
console.log(getStringLists)
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)


const sentence = countries.reduce((acc, cur, i) => {
  if (i === countries.length - 1) {
    return `${acc} and ${cur}`
  }
  return `${acc}, ${cur}`
}) + ' are north European countries.'

console.log(sentence)

const someNames = names.some(n => n.length > 7)
console.log(someNames)
const allLand = countries.every(c => c.toLowerCase().includes('land'))
console.log(allLand)

const sixLetterCountry = countries.find(c => c.length === 6)
console.log(sixLetterCountry)
const sixLetterIndex = countries.findIndex(c => c.length === 6)
console.log(sixLetterIndex)
const norwayIndex = countries.findIndex(c => c === 'Norway')
console.log(norwayIndex)
const russiaIndex = countries.findIndex(c => c === 'Russia')
console.log(russiaIndex)

const totalPrice = products
  .map(p => p.price)
  .filter(price => typeof price === 'number')
  .reduce((a, b) => a + b, 0)
console.log(totalPrice)

 const totalPrice2 = products.reduce((sum, p) => {
  return sum + (typeof p.price === 'number' ? p.price : 0)
}, 0)

console.log(totalPrice2)

function categorizeCountries(pattern) {
  return countries.filter(c => c.toLowerCase().includes(pattern.toLowerCase()))
}
console.log( categorizeCountries('land'))

function startingLettersCount(arr) {
  const counts = {}
  arr.forEach(c => {
    const letter = c[0]
    counts[letter] = (counts[letter] || 0) + 1
  })
  return Object.entries(counts).map(([letter, count]) => ({ letter, count }))
}

console.log( startingLettersCount(countries))


const getFirstTenCountries = arr => arr.slice(0, 10)
const getLastTenCountries = arr => arr.slice(-10)
console.log( getFirstTenCountries(countries))
console.log( getLastTenCountries(countries))

const sortByName = countries.sort(function(a, b) {
  if (a.name > b.name) return 1
  if (a.name < b.name) return -1
  return 0
})

// Sort by capital
const sortByCapital = countries.sort(function(a, b) {
  if (a.capital > b.capital) return 1
  if (a.capital < b.capital) return -1
  return 0
})

//  Sort by population (largest to smallest)
const sortByPopulation = countries.sort(function(a, b) {
  return b.population - a.population
})


function mostSpokenLanguages(countries_data, topN) {
  const langCount = {}

  for (let i = 0; i < countries_data.length; i++) {
    const langs = countries_data[i].languages
    for (let j = 0; j < langs.length; j++) {
      const lang = langs[j]
      if (langCount[lang]>0) {
        langCount[lang]++
      } else {
        langCount[lang] = 1
      }
    }
  }

  const arr = []
  for (let lang in langCount) {
    arr.push({ country: lang, count: langCount[lang] })
  }

  arr.sort(function(a, b) {
    return b.count - a.count
  })

  return arr.slice(0, topN)
}



console.log(mostSpokenLanguages(countries_data,10))



const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 
              27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 
              34, 24, 33, 29, 26]

const statistics = {
  count: function() {
    return ages.length
  },
  sum: function() {
    let total = 0
    for (let i = 0; i < ages.length; i++) {
      total += ages[i]
    }
    return total
  },
  min: function() {
    return Math.min.apply(null, ages)
  },
  max: function() {
    return Math.max.apply(null, ages)
  },
  range: function() {
    return this.max() - this.min()
  },
  mean: function() {
    return Math.floor(this.sum() / this.count())
  },
  median: function() {
    const sorted = ages.slice().sort(function(a, b) { return a - b })
    const mid = Math.floor(sorted.length / 2)
    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2
    }
    return sorted[mid]
  },
  mode: function() {
    const freq = {}
    for (let i = 0; i < ages.length; i++) {
      let val = ages[i]
      if (freq[val]) {
        freq[val]++
      } else {
        freq[val] = 1
      }
    }
    let maxCount = 0
    let modeVal = null
    for (let key in freq) {
      if (freq[key] > maxCount) {
        maxCount = freq[key]
        modeVal = key
      }
    }
    return { mode: Number(modeVal), count: maxCount }
  },
  var: function() {
    const mean = this.mean()
    let total = 0
    for (let i = 0; i < ages.length; i++) {
      total += (ages[i] - mean) ** 2
    }
    return total / ages.length
  },
  std: function() {
    return Math.sqrt(this.var()).toFixed(1)
  },
  freqDist: function() {
    const freq = {}
    for (let i = 0; i < ages.length; i++) {
      let val = ages[i]
      if (freq[val]) {
        freq[val]++
      } else {
        freq[val] = 1
      }
    }

    const result = []
    for (let key in freq) {
      const percent = (freq[key] / ages.length) * 100
      result.push([percent.toFixed(1), Number(key)])
    }

    result.sort(function(a, b) {
      return b[0] - a[0]
    })
    return result
  },
  describe: function() {
    return {
      Count: this.count(),
      Sum: this.sum(),
      Min: this.min(),
      Max: this.max(),
      Range: this.range(),
      Mean: this.mean(),
      Median: this.median(),
      Mode: this.mode(),
      Variance: this.var(),
      Std: this.std(),
      FreqDist: this.freqDist()
    }
  }
}

// ✅ Now calling all functions:
console.log('Count:', statistics.count())
console.log('Sum:', statistics.sum())
console.log('Min:', statistics.min())
console.log('Max:', statistics.max())
console.log('Range:', statistics.range())
console.log('Mean:', statistics.mean())
console.log('Median:', statistics.median())
console.log('Mode:', statistics.mode())
console.log('Variance:', statistics.var())
console.log('Standard Deviation:', statistics.std())
console.log('Frequency Distribution:', statistics.freqDist())
console.log('Describe:', statistics.describe())