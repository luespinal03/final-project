//index signup queries
const signUpSubmit = document.querySelector('#signUpSubmit')
const signUpEmail = document.querySelector('#signUpEmail')
const signUpPassword = document.querySelector('#signUpPassword')
let user = {}
//index 2 stuff
let likes = document.querySelectorAll('.likes input')


signUpSubmit.addEventListener('click', () => {
    if (signUpEmail.value !== '' && signUpPassword.value !== '') {
        user.email = signUpEmail.value;
        user.password = signUpPassword.value;
        console.log(user)

    } else {
        alert('Please Fill out the Empty Fields')
    }
})