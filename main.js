//landing page queries
const signUpSubmit = document.querySelector('#signUpSubmit')
const signUpEmail = document.querySelector('#signUpEmail')
const signUpPassword = document.querySelector('#signUpPassword')

//login page queries
const loginSubmit = document.querySelector('#loginSubmit')
const loginEmail = document.querySelector('#loginEmail')
const loginPassword = document.querySelector('#loginPassword')

//initial setup page
const takeMeButton = document.querySelector('#takeMetoMyPage')

//////users//////////
let user1 = {
    email: 'luisespinal296@yahoo.com',
    password: 'thisbetterwork'
}
let user2 = {
    email: 'claytonses@yahoo.com',
    password: 'test123'
}
let user = {}
///////////////////
//initSetup stuff
let likes = document.querySelectorAll('.likes input')


signUpSubmit.addEventListener('click', () => {
    if (signUpEmail.value !== '' && signUpPassword.value !== '') {
        user.email = signUpEmail.value;
        user.password = signUpPassword.value;
        console.log(user)
        window.location.href = './initSetup.html'
    } else {
        alert('Please Fill out the Empty Fields')
    }
});


//login page/////////////////
loginSubmit.addEventListener('click', () => {
    if ((loginEmail.value === user1.email && loginPassword.value === user1.password) || (loginEmail.value === user2.email && loginPassword.value === user2.password)) {
        console.log('we do it?')
        window.location = './customProfile.html'
    } else {
        alert('Please Fill out the Empty Fields')
    }
});