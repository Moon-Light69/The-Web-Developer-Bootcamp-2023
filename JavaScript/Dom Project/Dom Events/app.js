const btn = document.getElementById('v2.0')

btn.onclick = function() {
    console.log(`yeees it's work!!!`)
    console.log('javaScript is awsome')
}

btn.onmouseenter = () => {
    console.log('AHHHHHHH')
    console.log(`don't tuch me agian okay???`)
}

// const scream = () => {
//     console.log('AHHHHHHH')
//     console.log(`don't tuch me agian okay???`)
// }

btn.onmouseenter = scream

const newH1 = document.querySelector('h1').onmouseenter = function() {
    alert(`don't tuch me I'm not a button`)
}

const v3 = document.getElementById('v3.0')
v3.addEventListener('click', function () {
    alert(`This is version 3`)
})

function Twist() {
    console.log('Twist')
}

function shout() {
    console.log('shout')
}

const tasButton = document.querySelector('#tas')

tasButton.addEventListener('click', () =>{
console.log('Twist')
})
tasButton.addEventListener('click', shout, {once: true})

//========== udemyProject==========////
const hi = document.getElementById('hello')

hi.addEventListener('click', () => {
    console.log('hello')
})

const bye = document.getElementById('goodbye')

bye.addEventListener('click', ()=> {
    console.log('goodBye')
})