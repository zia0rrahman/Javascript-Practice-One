const myTodos = ['Buy Bread', 'Go to gym', 'Record youtube videos']
//console.log(myTodos.indexOf('Buy Bread'))


const newTodos = [{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go to gym',
    isDone: false,
}, {
    title: 'Complete youtube videos',
    isDone: true,
}]
/*
const index = newTodos.findIndex(function(todo, index){

    console.log(todo)
    return todo.title === 'Complete youtube videos'
})
console.log(index)
*/


const findTodo = function(myTodos, title){
    const titleReturned = myTodos.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}

let result = findTodo(newTodos, 'Go to gym')
console.log(result)