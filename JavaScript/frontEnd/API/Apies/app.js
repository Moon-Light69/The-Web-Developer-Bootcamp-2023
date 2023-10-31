// const data = `{"name": "placegoat",
// "version": "2.0.0",
// "description": "A placeholder image service, for goats.",
// "main": "server.js",
// "scripts": {
// "start": "node server.js",
// "debug": "nodemon server.js",
// "test": "echo "Error: no test specified" && exit 1"
// }`
// const parse = JSON.parse(data)
// parse.name

// JSON.stringify(data)

// const req = new XMLHttpRequest();

// req.onload = function() {
//     console.log("IT LOADED")
//     const data = JSON.parse(this.responseText)
//     console.log(data.name, data.height)
// }

// req.onerror = function() {
//     console.log("error!!!")
//     console.log(this)
// }

// req.open("get", "https://swapi.dev/people/1/")
// req.send

fetch("https://swapi.dev/api/people/1/")
  .then((res) => {
    console.log("RESOLED", res);
    res.json().then((data) => {
      console.log("JSON DONE", data);
    });
  })
  .catch((e) => {
    console.log("ERROR!!!", e);
  });

fetch("https://swapi.dev/api/people/1/ ")
  .then((res) => {
    console.log("RESOLED", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return fetch("https://swapi.dev/api/people/2/ ");
  })
  .then((res) => {
    console.log("SECEND REQUEST RESOLVED!!!", res);
    return res.json();
  })
  .then((data) => {
    console.log("JSON DONE", data);
  })
  .catch((e) => {
    console.log("ERROR!!!", e);
  });

const loadStarWarsPeople = async (id) => {
  try {
    const res1 = await fetch(`https://swapi.dev/api/people/${id}`);
    const data1 = await res1.json();
    console.log(data1);
    const res2 = await fetch("https://swapi.dev/api/people/10/ ");
    const data2 = await res2.json();
    console.log(data2);
  } catch (err) {
    console.log("ERROR!!!", err);
  }
};

loadStarWarsPeople();

axios.get("https://swapi.dev/api/people/1/ ").then((res) => {
  console.log("RESOLVE!!!", res);
});

const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/ `);
    console.log(res.data);
  } catch (e) {
    console.log("ERROR!!!, e");
  }
};
getStarWarsPerson(3);

const getStarwars = async (id) => {
  try {
    const result = await fetch(`https://swapi.dev/api/people/${id}/ `);
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.error(`We're sorry but your request is rejected becuse:`, error);
  }
};

const apiResult = async function () {
  try {
    const characterFeatures = await fetch("https://swapi.dev/api/people/1/");
    console.log("RESOLED", characterFeatures);
    const formattedData = await characterFeatures.json();
    console.log(formattedData);
    const characterNames = await fetch("https://swapi.dev/api/people/2/ ");
    console.log("SECEND REQUEST RESOLVED!!!", characterNames);
    const formattedNames = await characterNames.json();
    console.log("JSON DONE", formattedNames);
  } catch (e) {
    console.log("ERROR!!!", e);
  }
};

const jokes = document.getElementById("jokes");

const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  console.log(jokeText);
  const newLi = document.createElement("li");
  newLi.append(jokeText);
  jokes.append(newLi);
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

button.addEventListener("click", addNewJoke);
