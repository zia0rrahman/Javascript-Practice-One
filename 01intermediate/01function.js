
let sayHello = function(name){
    console.log(`Greeting message for ${name}`)
    console.log(`Hey ${name}`)
}
//sayHello('Jhon')


let fullNameMaker = function(firstname, lastname){
    console.log('Welcome to LCO')
    console.log(`Happy to have you, ${firstname} ${lastname}`)
}
//fullNameMaker('Jhon', 'Doe')


let myAdder = function(num1, num2){
    let added = num1 + num2
    return added
}

let result = myAdder(5, 5)
//console.log(result)


let guestUser = function(name = 'unName', courseCount = 0){
    return 'Hello ' + name + ' and your course count is: ' + courseCount
}
console.log(guestUser('John', 2))