
const sayHello = (name) => {
    return `Hey there, ${name}!`
}
//console.log(sayHello('Ziaur Rahman'))


const todos = [{
    title: 'Get up morning',
    isDone: true,
}, {
    title: 'Buy bread',
    isDone: true,
}, {
    title: 'Take breakfast',
    isDone: true,
}, {
    title: 'Take meals',
    isDone: false,
}, {
    title: 'Take bath',
    isDone: false,
}, {
    title: 'Make website',
    isDone: false,
}]

const thingsNotDone = todos.filter((todo) => {
    return todo.isDone === false
})

thingsNotDone.forEach((todo) => {
    console.log(todo.title)
    //console.log(todo.isDone)
})