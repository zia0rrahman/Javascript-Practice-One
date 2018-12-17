
var john = {
    name: 'I am John',
    age: 24,
    isActive: true,
}

var marry = {
    name: 'I am Marry',
    age: 23,
    isActive: true,
}

var sam = {
    name: 'I am Sam',
    age: 29,
    isActive: false,
}

let users = new Map()

users.set('john', john)
users.set('marray', marry)
users.set('sam', sam)

//console.log(users)
//console.log(users.size)

//console.log(users.get('sam'))
//console.log(users.values())
//console.log(users.keys())

for (const key of users.keys()) {
    //console.log(key)
}

for (const value of users.values()) {
    //console.log(value)
    //console.log(value.name)
    //console.log(value.age)
    //console.log(value.isActive)
}

var arrofarr = [['one', 1], ['two', 2], ['three', 3]]

var newMap = new Map(arrofarr)
console.log(newMap)