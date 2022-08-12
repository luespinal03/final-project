//landing page queries
const signUpSubmit = document.querySelector('#signUpSubmit')
const signUpUserName = document.querySelector('#signUpUserName')
const signUpPassword = document.querySelector('#signUpPassword')

//login page queries
const loginSubmit = document.querySelector('#loginSubmit')
const loginUserName = document.querySelector('#loginUserName')
const loginPassword = document.querySelector('#loginPassword')

//initial setup page
const takeMeButton = document.querySelector('#takeMetoMyPage')

//custom page/////
let customProfileCardLikes = document.querySelector("#customProfileCardLikes")
const dropDownItems = document.querySelectorAll('#sideNav a')

let postButton = document.querySelector('#postButton');
let status = document.querySelector('#status');
let statusPost = document.querySelector('#statusPost');
let cardName = document.querySelector('.card-title')

// This controls the status post button and where it displays (right undeneath it)
try {
    postButton.addEventListener('click', () => {
        statusPost.innerText = status.value;
        status.value = ''
    });
} catch (error) {
    console.log(error);
}


//////users//////////
let user1 = {
    userName: 'espinal03',
    password: 'test123'
}
let user2 = {
    userName: 'Stealth',
    password: 'test123'
}
let user = {}
///////////////////
//initSetup stuff
let likeItems = [];
let likes = document.querySelectorAll('.likes input')

console.log('user1')

try {
    signUpSubmit.addEventListener('click', () => {
        localStorage.clear();
        if (signUpUserName.value !== '' && signUpPassword.value !== '') {
            user.userName = signUpUserName.value;
            user.password = signUpPassword.value;
            console.log(user)
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = './initSetup.html'
        } else {
            alert('Please Fill out the Empty Fields')
        }
    });
} catch (error) {
    console.log(error);
}
try {
    let localLiked = localStorage.getItem('liked');
    let localUser = localStorage.getItem('user');
    if (localLiked !== null) {
        user = JSON.parse(localUser)
        likeItems = JSON.parse(localLiked);
        customProfileCardLikes.innerText = `Liked: ${likeItems}`
        cardName.innerText = user.userName;
    }
} catch (error) {
    console.log(error);
}


try {
    takeMeButton.addEventListener('click', () => {
        console.log('hi')
        for (let i = 0; i < likes.length; i++) {
            if (likes[i].checked === true) {
                likeItems.push(likes[i].value)
                console.log(likeItems)
            }
        }
        localStorage.setItem('liked', JSON.stringify(likeItems));
        window.location.href = './customProfile.html'


    });
} catch (error) {
    console.log(error);
}
console.log(likeItems)


// this controls event listener for submit button on login page. 
try {
    loginSubmit.addEventListener('click', () => {
        console.log('yes')
        if (loginUserName.value.toLowerCase() === user1.userName.toLowerCase() && loginPassword.value.toLowerCase() === user1.password.toLowerCase()) {
            window.location.href = './espinal.html'
        } else if (loginUserName.value.toLowerCase() === user2.userName.toLowerCase() && loginPassword.value.toLowerCase() === user2.password.toLowerCase()) {
            // console.log('we do it?')
            window.location.href = './stealth.html'
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