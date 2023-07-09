let input = prompt("what would you like to do?");

const todos = ["go to gym", "talk to parastu"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i + 1}: ${todos[i]}`);
    }
    console.log("************");
  } else if (input === "new") {
    const newTodo = prompt("Ok, what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} add to list`);
  } else if (input === "delet") {
    const index = parseInt(prompt("Ok, enter an index to deleted"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Ok, ${deleted[0]} deleted`);
    } else {
      console.log("Unknow index");
    }
  }
  input = prompt("what would you like to do?");
}
console.log("Ok quit the app");

const userAge = {
  danial: 30,
  ehsan: 50,
  ali: 41,
  asghar: 44,
};

for (let person in userAge){
    console.log(person, userAge[person])
}

array
const students = ['John', 'Sara', 'Jack'];

using for...of
for ( let element of students ) {

display the values
    console.log(element);
}

function danial() {
  console.log("hello I'm new function");
}

const userAge = {
  danial: 30,
  ehsan: 50,
  ali: 41,
  asghar: 44,
};

let total = 0;
let scores = Object.values(userAge);

for (let skip of scores) {
  total += scores;
}
console.log(total / scores.length);

console.log(scores);

  for (let score of scores) {
    total += score;
  }
  console.log(total / scores.length);

function user(Name) {
  //   for (let i = 0; i < 10; ++i) {
  //     console.log(i + 1, Name.toUpperCase());
  //   }
  console.log(Name);
}

function input(str, num) {
  console.log(str, parseInt(num));
}

function isSnakeEyes(die1, die2) {
  if (die1 === 1 && die2 === 1) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}

function number(x, y) {
  if (typeof x === "string" && typeof y === "string") {
    return false;
  } else {
    return x + y;
  }
}

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  return x + y;
}

========================================================================================
==========================================old===========================================
========================================================================================

const userList = [
  ["mahmoud", "zari", "danial", "sarina"],
  ["majid", "marjan", "shiva", "arash", "anisa"],
  ["farshid", "fhatemeh", "omid", "ayda"],
];

for (user of userList) {
  for (names of user) {
    let i = 0;
    i < user.length;
    ++i;
    console.log(`gorup:${i}`);
  }
}

for (let i = 0; i < userList.length; ++i) {
  console.log(`gorup number ${i + 1}`);
  const row = userList[i];
  for (j = 0; j < row.length; ++j) {
    console.log(`Num:${j} Name:${row[j]}`);
  }
}

const userAge = {
  danial: 30,
  ehsan: 50,
  ali: 41,
  asghar: 44,
};

let total = 0;
let scores = Object.values(userAge);

for (let score of scores) {
  total += score;
}
console.log(total / scores.length);

========================================================================================
==========================================old===========================================
========================================================================================

let number = 8;

if (number > 0) {
  const PI = 3.14159;
  let msg = "HIII!";
}

console.log(radius);
console.log(PI);

for (var i = 0; i < 5; i++) {
  var msg = "HELLO TO THE WORLD!";
  console.log(msg);
}
console.log(msg);
console.log(i);

function bankRobbery() {
  const heroes = ["Spiderman", "IronMan", "BlackPanther", "Hulk"];
  function CryForHelp() {
    function Inner() {
      for (hero of heroes) {
        console.log(`${hero} please save me!!!`);
      }
    }
    Inner();
  }
  CryForHelp();
}

function bankRobbery() {
  const heroes = ["Spiderman", "IronMan", "BlackPanther", "Hulk"];
  function CryForHelp() {
    function Inner() {
      for (let hero = 0; hero < heroes.length; ++hero) {
        console.log(`${heroes[hero].toLocaleUpperCase()} please save me!!!`);
      }
    }
    return Inner();
  }
  return CryForHelp();
}

const add = function (x, y) {
  return x * y;
};

console.warn("hi");
console.error("Not Here!!!");
document.write("welcome to our javaScript");

function log() {
  console.log("HI");
}

const enter = () => {
  console.warn("BYE");
};
enter();

const Number = function (x, y) {
  return x + y;
};

const number = () => {
  let number = "Don't do this to me!!!";
  return number;
};

var radius = 8;
if (radius > 0) {
  var pi = 30;
  var msi = "hello world";
}
console.log(pi);
console.log(msi);
