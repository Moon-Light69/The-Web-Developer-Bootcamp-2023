function multiply(x,y) {
    return x * y;
}

function square(x) {
    return multiply(x,x);
}

function isRightTriangle(a,b,c){
    return square(a) + square(b) === square(c);
}

// isRightTriangle(3,4,5) 

console.log('Sending request to server')

setTimeout(() => {
    console.log('Here is your data from the server...')
}, 3000);
console.log(`I'M AT THE END OF THE FILE!`)