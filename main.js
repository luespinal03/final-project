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

//custom page/////
let customProfileCardLikes = document.querySelector("customProfileCardLikes")
const dropDownItems = document.querySelectorAll('#sideNav a')

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
let likeItems = [];
let likes = document.querySelectorAll('.likes .likedItems')

console.log('user1')
console.log(loginSubmit)
console.log(signUpSubmit)

try {
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
} catch (error) {
    console.log(error)
}



try {
    takeMeButton.addEventListener('click', () => {
        if (likes.checked === true) {
            likeItems.push(likes.checked)
            console.log(likeItems)
            window.location.href = './customProfile.html'
        } else {
            window.location.href = './customProfile.html'
        }
    });
} catch (error) {
    console.log(error);
}



try {
    loginSubmit.addEventListener('click', () => {
        console.log('yes')
        if ((loginEmail.value === user1.email && loginPassword.value === user1.password) || (loginEmail.value === user2.email && loginPassword.value === user2.password)) {
            console.log('we do it?')
            window.location.href = './customProfile.html'
        } else {
            alert('Please Fill out the Empty Fields')
        }
    });
} catch (error) {
    console.log(error)
}

//custom page
try {
    for (let i = 0; i < dropDownItems.length; i++) {
        dropDownItems[i].addEventListener('mouseenter', () => {
            dropDownItems[i].classList.replace("text-white", "text-active")
        })
        dropDownItems[i].addEventListener('mouseout', () => {
            dropDownItems[i].classList.replace("text-active", "text-white")
        })
    }
} catch (error) {
    console.log(error)
}