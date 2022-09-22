const array = ['ciro', 'ciro']

console.log(array[0] == array[1])

const pessoa = {
  name: 'vera',
  age: 57,
  height: 1.63,
  pessoa2: {
    name: 'ciro',
    age: 21,
    height: 1.83,
    adress: 'travessa evandro cairo 56'
  },
  pessoa3: {
    name: 'Bartolomeu',
    age: 54,
    height: 1.75,
    adress: 'travessa evandro cairo 56'
  },
  pessoa4: {
    name: 'joao',
    age: 23,
    height: 1.66,
    adress: 'travessa evandro cairo 56'
  }
}
console.log(pessoa.pessoa4.name)
const random = Math.floor(Math.random() * (100 - 10) + 10)
console.log(random)
