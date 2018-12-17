
const student = {
    name: 'Anzir Abdi Rahman',
    age: 5,
    isActive: true,
    seeCartoon: 'Yes',
    study: 'Yes'
}

const studentobjToString = JSON.stringify(student)
//console.log(typeof studentobjToString)

//localStorage.setItem('student', studentobjToString)

// converting string to json
const strToJsonStudent = JSON.parse(studentobjToString)
// console.log(typeof strToJsonStudent);

//now graving the below
console.log(strToJsonStudent.name);

