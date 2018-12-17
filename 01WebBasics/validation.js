// alert('connected')
/*
function myValidation(){
    //console.log('clicked')
    let myValue = document.getElementById('myForm').value
    
    if(isNaN(myValue) || myValue < 1 || myValue > 20){
        //console.log('Your input is not valid!')
        let showError = document.getElementById('showResult')
        showError.textContent = "Your input is not valid!"    
    }else{
        //console.log("It is a valid input")
        let showSuccess = document.getElementById('showResult')
        showSuccess.textContent = "Your input is Ok."
    }
}
*/


// form validation 2
document.querySelector('.myForm').addEventListener('submit', (event) => {
    //hide data from url
    event.preventDefault()

    //console.log(event.target.username.value)
    //console.log(event.target.fullname.value)
    //console.log(event.target.pass.value)
    //console.log(event.target.passcheck.value)

    let username = event.target.username.value
    let fullName = event.target.fullname.value
    let password = (event.target.pass.value)
    let passwordCheck = (event.target.passcheck.value)
    

    if ((username !== '') && (fullName !== '') && (password !== '') && (passwordCheck !== '')) {
        if ((password === passwordCheck)) {

            if ((username.length <= 6)) {
                //check username length
                let showusrError = document.querySelector('.showResult')
                showusrError.textContent = 'Username length must be up to 6'
            } else {
                let showSuccess = document.querySelector('.showResult')
                showSuccess.textContent = 'Your form is submitted!'

                // show user input result
                let showUser = document.querySelector('.username').textContent = username
                let showfullName = document.querySelector('.fullname').textContent = fullName
            }
        } else {
            //console.log('Password not match!')
            let showError = document.querySelector('.showResult')
            showError.textContent = 'Password not match!'
        }
    } else {
        //console.log('Password not match!')
        let showError = document.querySelector('.showResult')
        showError.textContent = `Input form can be empty!`
    }


    //remove value from input
    event.target.username.value = ''
    event.target.fullname.value = ''
    event.target.pass.value = ''
    event.target.passcheck.value = ''

})