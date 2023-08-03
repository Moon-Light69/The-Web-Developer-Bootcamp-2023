// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const containerJS = document.getElementById('container')
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// for (let i = 1; i < 151; i++) {
//     const newimg = document.createElement('img')
//     newimg.src = `${baseURL}${i}.png`
//     container.appendChild(newimg)
// }

for (let i = 1; i <= 151; ++i) {
    const pokemonDIV = document.createElement('div')
    pokemonDIV.classList.add('pokemonStyle')
    
    const label = document.createElement('span')
    label.innerText = `#${i}`

    const newimg = document.createElement('img')
    newimg.src = `${baseURL}${i}.png`

    pokemonDIV.appendChild(newimg)
    pokemonDIV.appendChild(label)
    containerJS.appendChild(pokemonDIV)
}