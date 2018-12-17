// delete entire localstorage
localStorage.clear()


// save data into localstorage
localStorage.setItem('name', 'Ziaur Rahman')

// get item from localstorage
const name = localStorage.getItem('name')
// console.log(name);

// updating localstorage data
localStorage.setItem('name', 'Mizanur Rahman')
const updateName = localStorage.getItem('name')
//console.log(updateName);

// delete specific item from localstorge 
localStorage.removeItem('name')


console.log(updateName)