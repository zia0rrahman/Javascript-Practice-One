
/*
class User{

    constructor(firstname, lastname, credit){
        this.firstname = firstname
        this.lastname = lastname
        this.credit = credit
    }

    //method
    getFullName(){
        let fullName = `${this.firstname} ${this.lastname} is my full name.`
        return fullName
    }

    editName(newname){
        const myName = newname.split(' ')
        this.firstname = myName[0]
        this.lastname = myName[1]
    }

}
//object
const jhon = new User('Ziaur', 'Rahman', 35)
// console.log(jhon);

// console.log(jhon.getFullName());
jhon.editName('Mizanur Rahman')
console.log(jhon.getFullName());
*/





// -------------------------------------------
class User{

    constructor(firstname, middlename, lastname){
        this.firstname = firstname
        this.middlename = middlename
        this.lastname = lastname
    }

    //method
    getFullName(){
        let fullName = `${this.firstname} ${this.middlename} ${this.lastname} is my full name.`
        return fullName
    }

    editName(newname){
        const myName = newname.split(' ')
        this.firstname = myName[0]
        this.middlename = myName[1]
        this.lastname = myName[2]
    }

}

//Inheritance
//you can say also it as a child class of User class and User class is Parent class
class Teacher extends User{
    constructor(firstname, middlename, lastname, subject){
        super(firstname, middlename, lastname)
        this.subject = subject
    }

    //Method overriding
    getFullName(){
        let fullName = `${this.firstname}  ${this.lastname} is my full name and i teach ${this.subject}`
        return fullName
    }
}


//object
// const jhon = new User('Ziaur', 'Rahman', 35, 'Python')

const jhon = new Teacher('Ziaur', 'Rahman', 35, 'Python')

// console.log(jhon);

// console.log(jhon.getFullName());
jhon.editName('Mizanur Rahman Azhari')
console.log(jhon.getFullName());
