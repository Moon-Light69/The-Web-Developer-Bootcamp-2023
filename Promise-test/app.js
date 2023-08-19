// const fakeRequest = (url) => {
//     return new Promise( (resolve, reject) => {
//         const rand = Math.random();
//         setTimeout( () => {
//             if(rand < 0.7) {
//                 resolve('YOUR FAKE DATA HERE')
//             }
//                 reject("REQUEST ERROR!")
//         }, 5000)
//     })
// }

// fakeRequest('/dogs/5')
//     .then( (data) => {
//         console.log("DONE WITH REQUEST!")
//         console.log('data is:', data)
//     })
//     .catch((err) => {
//         console.log("REQUEST FALSE!!!")
//         console.log(err)
//     })

const delayColorChange = (color, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve()
        }, delay);
    })
}

delayColorChange('red', 5000)
    .then(() => {delayColorChange('orange', 5000)})
    .then(() => {delayColorChange('yellow', 5000)})
    .then(() => {delayColorChange('green', 5000)})
    .then(() => {delayColorChange('blue', 5000)})
