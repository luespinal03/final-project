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
    signUpSubmit.addEventListener('click', () => { //all of this is done on sign up button click
        localStorage.clear();
        //if value of sign up intputs are not equal to empty string
        if (signUpUserName.value !== '' && signUpPassword.value !== '') {
            user.userName = signUpUserName.value; //user object creates key value pairs
            user.password = signUpPassword.value;
            console.log(user)
            localStorage.setItem('user', JSON.stringify(user)); //local storage takes everything in as string
            window.location.href = './initSetup.html'
        } else {
            alert('Please Fill out the Empty Fields')
        }
    });
} catch (error) {
    console.log(error);
}
try {
    let localLiked = localStorage.getItem('liked'); //our liked items "initSetup" that are stored on localstorage are turning equalling a variable for later
    let localUser = localStorage.getItem('user'); //^^ same but from our signup input
    if (localLiked !== null) {
        user = JSON.parse(localUser) //turning stringified user info back to an object
        likeItems = JSON.parse(localLiked); //turning stringified liked items back into array
        customProfileCardLikes.innerText = `Liked/Hobbies: ${likeItems}`
        cardName.innerText = user.userName; //^^ innertext of the card is equalling our localstorage jsond info from sign up and setup
    }
} catch (error) {
    console.log(error);
}


try {
    takeMeButton.addEventListener('click', () => {
        console.log('hi')
        for (let i = 0; i < likes.length; i++) {
            if (likes[i].checked === true) { //if liked items [i] meaning it checks all of them are .checked true then 
                likeItems.push(likes[i].value) //push to likeItems array
                console.log(likeItems)
            }
        }
        localStorage.setItem('liked', JSON.stringify(likeItems)); //setting our likeItems array to localStorage as a string
        window.location.href = './customProfile.html' //redirecting to new page on click after doing other stuff


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
    for (let i = 0; i < dropDownItems.length; i++) { //for loop for ALL of the drop down items on left nav bbar
        dropDownItems[i].addEventListener('mouseenter', () => { //mouse enter and out changing class to change color from BS
            dropDownItems[i].classList.replace("text-white", "text-active")
        })
        dropDownItems[i].addEventListener('mouseout', () => {
            dropDownItems[i].classList.replace("text-active", "text-white")
        })
    }
} catch (error) {
    console.log(error)
}






/**********************************************************************
 *  SECTION BELOW THIS POINT CORRESPONDS TO SPOTIFY API TRANSACTIONS  *
 **********************************************************************/

let spotifyButton = document.querySelector('#spotifyButton');
let spotifyApi = 'https: //api.spotify.com/v1';
// Client ID, the unique identifier of your app.
// yourSpace spotify client ID = 684c1cf2db91417a9dd7cd68e936bfec

// Client Secret, the key you will use to authorize your Web API or SDK calls.
// Client Secret 01496028e58241c09e8b87f68f651a04


// old lady purple though like buick purple


spotifyButton.addEventListener('click', () => {
    let readJeopardyData = async () => {
        let rawSpotifyData = await fetch('https: //api.spotify.com/v1');
        let data = await rawSpotifyData.json();
        console.log(data);
        // let groupedData = _.groupBy(data, "value");
    }
})

// let readJeopardyData = async () => {
//     let rawSpotifyData = await fetch('https: //api.spotify.com/v1');
//     let data = await rawSpotifyData.json();
//     console.log(data);
//     // let groupedData = _.groupBy(data, "value");
// }