let userName = 'ziaurr'
let userEmail = 'test@gmail.com'
let password = '12345Aapp'

let userNameChecker = function (username) {
    if (username.length > 5) {
        return true
    } else {
        return `Username must be greater than 5 character!`
    }
}

let userEmailChecker = function (useremail) {
    if ((useremail.includes('@')) && (useremail.includes('.'))) {
        return true
    } else {
        return `Your email formet is not correct!`
    }
}

let userPasswordChecker = function (userpassword) {
    if (userpassword.includes('123') && userpassword.includes('A') && userpassword.includes('a') && (userpassword.length > 8)) {
        return true
    } else {
        return `Your password must should include 123,A,a`
    }
}


console.log(userNameChecker(userName))
//console.log(userEmailChecker(userEmail))
//console.log(userPasswordChecker(password))

//TODO: will start from generating a random number
