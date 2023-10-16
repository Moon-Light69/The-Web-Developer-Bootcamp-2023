const input = document.querySelector('input')
const h1 = document.querySelector('h1')

// input.addEventListener('change', function(e) {
//     console.log('what can I say???')
//     console.log(e)
// })

// input.addEventListener('input', function(e) {
//     console.log('input event!')
//     console.log(e)
// })

// input.addEventListener('change', function() {
//     h1.innerText = input.value
// })

input.addEventListener('input', function() {
    h1.innerText = input.value
})