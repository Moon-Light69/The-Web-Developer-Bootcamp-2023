// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure(console.log('Connection Timeout :('))
        } else {
            success(console.log(`Here is your fake data from ${url}`))
        }
    }, delay)
}

fakeRequestCallback('books.com/page1',
    function (find) {
        console.log("IT WORKED!!!!")
        console.log(find)
        fakeRequestCallback('books.com/page2',
            function (find) {
                console.log("IT WORKED AGAIN!!!!")
                console.log(find)
                fakeRequestCallback('books.com/page3',
                    function (find) {
                        console.log("IT WORKED AGAIN (3rd req)!!!!")
                        console.log(find)
                    },function (err) {
                        console.log("ERROR (3rd req)!!!", err)
                    })
            },
            function (err) {
                console.log("ERROR (2nd req)!!!", err)
            })
    }, function (err) {
        console.log("ERROR!!!", err)
    })


//THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

fakeRequestPromise('danial.com/page1')
.then( (accept) => {
    console.log("PROMISE RESELVED page 1 !")
    console.log(accept)
    return fakeRequestPromise('danial.com/page2')
})
.then( (accept) => {
    console.log("PROMISE RESELVED page 2 !")
    console.log(accept)
    return fakeRequestPromise('danial.com/page3')
})
.then( (accept) => {
    console.log("PROMISE RESELVED page 3 !")
    console.log(accept)
})
.catch((err) => {
    console.log("ERROR!!!", err)
})


// const request = fakeRequestPromise('danial.com/page1');

//     request
//         .then( () => {
//             console.log("PROMISE RESELVED!")
//             console.log("IT WORKED!!!")
//         })
//         .catch( () => {
//             console.log("PROMISE REJECTED!")
//             console.log("OH NO, ERROR!!!")
//         })
    
// fakeRequestCallback('books.com/page1',
//     function (find) {
//         console.log("IT WORKED!!!!")
//         console.log(find)
//         fakeRequestCallback('books.com/page2',
//             function (find) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(find)
//                 fakeRequestCallback('books.com/page3',
//                     function (find) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(find)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })







fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((acc) => {
        console.log("IT WORKED!!!!!! (page1)")
        console.log(acc)
        fakeRequestPromise('yelp.com/api/coffee/page2')
            .then(() => {
                console.log("IT WORKED!!!!!! (page2)")
                fakeRequestPromise('yelp.com/api/coffee/page3')
                    .then(() => {
                        console.log("IT WORKED!!!!!! (page3)")
                    })
                    .catch(() => {
                        console.log("OH NO, ERROR!!! (page3)")
                    })
            })
            .catch(() => {
                console.log("OH NO, ERROR!!! (page2)")
            })
    })
    .catch(() => {
        console.log("OH NO, ERROR!!! (page1)")
    })


//THE CLEANEST OPTION WITH THEN/CATCH
//RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED!!!!!! (page3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!")
        console.log(err)
    })



