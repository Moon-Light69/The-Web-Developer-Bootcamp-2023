document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

const input = document.querySelector('input')

// input.addEventListener('keydown', function() {
//     console.log("KEYDOWN")
// })

input.addEventListener('keydown', function(userInput) {
    console.log(userInput.key)
    console.log(userInput.code)
})

// input.addEventListener('keyup', function() {
//     console.log("KEYUP")
// })

// window.addEventListener('keydown', function(e) {
//     console.log(e.code)
// })

window.addEventListener('keydown', function(e) {
    switch (e.code){
        case 'ArrowUp' :
        console.log("UP!")
        break;
        case 'ArrowDown' :
        console.log("DOWN!")
        break;
        case 'ArrowLeft' :
        console.log("LEFT!")
        break;
        case 'ArrowRight' :
        console.log("RIGHT!")
        break;
        default :
        console.log("IGNORED!")
    }
})