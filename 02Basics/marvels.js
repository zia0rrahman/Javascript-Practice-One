/*

// Datatype - Array

const superHeros = ['Spiderman', 'Super Man', 'Capt. America', 'Thor']

console.log(superHeros)
console.log(superHeros[0])
// print the last element of array
console.log(superHeros[superHeros.length - 1])

//print the value of array
console.log(`We have ${superHeros.length} super heros`)

*/



let numbers = ['one', 'two', 'three', 'four', 'five']

//numbers[1] = 'Something'
//console.log(numbers)


//Delete element from start of the array
//console.log(numbers.shift())
//console.log(numbers)


//Add new element to the start of the array
//numbers.unshift('Newly Added')
//console.log(numbers)


//Delete last element from the array
//console.log(numbers.pop())
//console.log(numbers)


//Add new element end of the array
//numbers.push('six')
//console.log(numbers)


//Middle
numbers.splice(3, 1, 'Something')
console.log(numbers)

