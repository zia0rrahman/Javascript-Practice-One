
let numOne = 22
let numTwo = 7

let result = numOne / numTwo
let floatResult = result.toFixed(2)
//console.log(floatResult)

//using math library
//doshomik ke komiye integer a niye jabe
//console.log(Math.floor(floatResult))
//doshomik ke badiye integer a niye jabe
//console.log(Math.ceil(floatResult))


let upper = 25
let lower = 20

let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower
console.log(myRandom)