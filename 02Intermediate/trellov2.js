let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
}

let addMeeting = function(todo, meet = 0){
    todo.meetings = todo.meetings + meet
}

let meetDone = function(todo, meet = 0){
    todo.meetDone = todo.meetDone - meet
}

let resetDay = function(todo){
    todo.meetings = 0
    todo.meetDone = 0
}

let getSummaryOfDay = function(todo){
    let meetLeft = todo.meetings + todo.meetDone  // See that (-- = +) 
    return `You have ${meetLeft} meetings today!`
}

addMeeting(myTodos, 7)
meetDone(myTodos, 3)

// console.log(myTodos)
console.log(getSummaryOfDay(myTodos))