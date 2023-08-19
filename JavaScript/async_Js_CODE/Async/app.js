// const login = async(username, password) => {
//     if(!username || !password) {
//         throw 'Missing Credentials'
//     } else if (password === "corgifeearecute") {
//         return 'welcome'
//     } else {
//         throw 'Invalid Password'
//     }
// }

// login('daniel', 'corgifeearecute')

// .then((msg) => {
//     console.log("LOGGED IN!")
//     console.log(msg)
// })
// .catch( (err) => {
//     console.log("ERROR!")
//     console.log(err)
// })

const delayColorChange = (color, delay) => {
  return new Promise((accept) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      accept();
    }, delay);
  });
};

// delayColorChange("red", 1000)
//   .then(() => {
//     delayColorChange("orange", 1000);
//   })
//   .then(() => {
//     delayColorChange("yellow", 1000);
//   })
//   .then(() => {
//     delayColorChange("green", 1000);
//   })
//   .then(() => {
//     delayColorChange("blue", 1000);
//   })
//   .then(() => {
//     delayColorChange("indigo", 1000);
//   })
//   .then(() => {
//     delayColorChange("violet", 1000);
//   });

async function rainbow() {
  await delayColorChange("orange", 1000);
  await delayColorChange("yellow", 1000);
  await delayColorChange("green", 1000);
  await delayColorChange("blue", 1000);
  await delayColorChange("indigo", 1000);
  await delayColorChange("violet", 1000);
  return 'ALL DONE!'
}

// rainbow().then( () => {
//     console.log("END OF RAINBOW!")
// })

async function printRainbow() {
    await rainbow()
    console.log("END OF RAINBOW!!!!")
}

const fakeRequest = (url) => {
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

async function makeTwoRequest() {
   try {
    let data1 = await fakeRequest('/page1')
    console.log(data1)
    let data2 = await fakeRequest('/page2')
    console.log(data2)
   } catch (e) {
    console.log("CAUTCH AN ERROR!")
    console.log("ERROR IS:", e)
   }
}  