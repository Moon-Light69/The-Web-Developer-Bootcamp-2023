// const button = document.querySelector('button')
// const newH1 = document.querySelector('h1')

// button.addEventListener('click', function () {
//     const r = Math.floor(Math.random() * 256)
//     const g = Math.floor(Math.random() * 256)
//     const b = Math.floor(Math.random() * 256)
//     const newImg = `rgb(${r}, ${g}, ${b})` 
//     document.body.style.backgroundColor = newImg
//     newH1.innerText = newImg
// })

const button = document.querySelector('button')
const newH1 = document.querySelector('h1')

button.addEventListener('click', function () {
    const newcolor = makeRndColor()
    document.body.style.backgroundColor = newcolor
    newH1.innerText = newcolor
})

const makeRndColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

const grButton = document.querySelectorAll('div button')

for (let button of grButton) {
    button.addEventListener('click', function() {
        const color = makeRndColor()
        button.style.backgroundColor = makeRndColor()
        button.style.color = makeRndColor()
        button.innerText = color
    })
}
