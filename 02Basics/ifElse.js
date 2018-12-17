
var whoIsHere = 'user'

if(whoIsHere === 'user'){
    console.log('Greeting message for user')
    console.log('Allow access to view all courses')
}else if(whoIsHere === 'teacher'){
    console.log('Greeting message for teacher')
    console.log('Allow access to his courses')
}else{
    console.log('Message: please verify your email')    
    console.log('Send user an email for varification')    
}