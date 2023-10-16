const login = async(username, password) => {
    if(!username || !password) {
        throw new Error ('Missing Credentials')
    } else if (password === "corgifeearecute") {
        return 'welcome'
    } else {
        throw new Error('Invalid Password')
    }
}

login('daniel', 'corgifeearecute')

.then((msg) => {
    console.log("LOGGED IN!")
    console.log(msg)
})
.catch( (err) => {
    console.log("ERROR!")
    console.log(err)
})

const delayColorChange = (color, delay) => {
  return new Promise((accept) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      accept();
    }, delay);
  });
};

delayColorChange("red", 1000)
  .then(() => {
   return delayColorChange("orange", 1000);
  })
  .then(() => {
    return delayColorChange("yellow", 1000);
  })
  .then(() => {
    return delayColorChange("green", 1000);
  })
  .then(() => {
    return delayColorChange("blue", 1000);
  })
  .then(() => {
    return delayColorChange("indigo", 1000);
  })
  .then(() => {
    return  delayColorChange("violet", 1000);
  })
  .catch( (err) => {
    console.log(err)
  })
  

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
}  2

//==========//

const callToWar = (status) => {
  return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === 'Refused') {
                reject('Allies wont join to war');
            } else {
                resolve('Allies will join you to war');
            }
        }, 20000)
  })
}

const startMarching = (direction) => {
  return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (direction === 'forward' || direction === 'backward') {
                reject('marching army is in wrong direction');
            } else {
                resolve('marching army is toward enemies');
            }
        }, 20000)
  })
}

const startAttacking = (speed) => {
  console.log('attack has been started');
}

try{
  const temp = await callToWar('Refused')
  const temp2 = await callAnotherFunc(temp);    
}
catch(error){
  console.log(error);
}





async function warHasStarted(){
  try{
    const temp = await callToWar('Refused');
    const temp2 = await startMarching(temp);
    const temp3 = startAttacking(response);
  }catch(error){
    const err = Error('error in starting war');
    err.status = 401;
    err.danial = 'player';
    throw err;
  }

  // callToWar('Refused')
  // .then((response) => {
  //   startMarching(response);
  // })
  // .then((response) => {
  //   startAttacking(response);
  // })
  // .catch((error) => {
  //   console.log('error in war');
  // })
}


function startGame(){
  //....
 // ...
 try{
  warHasStarted();
  //.....
 }catch(error){
  if(error.status === 401){
    restartGame();
  }
 }
}