// let input = prompt("what would you like to do?");

// const todos = ["go to gym", "talk to parastu"];

// while (input !== "quit" && input !== "q") {
//   if (input === "list") {
//     console.log("************");
//     for (let i = 0; i < todos.length; i++) {
//       console.log(`${i + 1}: ${todos[i]}`);
//     }
//     console.log("************");
//   } else if (input === "new") {
//     const newTodo = prompt("Ok, what is the new todo?");
//     todos.push(newTodo);
//     console.log(`${newTodo} add to list`);
//   } else if (input === "delet") {
//     const index = parseInt(prompt("Ok, enter an index to deleted"));
//     if (!Number.isNaN(index)) {
//       const deleted = todos.splice(index, 1);
//       console.log(`Ok, ${deleted[0]} deleted`);
//     } else {
//       console.log("Unknow index");
//     }
//   }
//   input = prompt("what would you like to do?");
// }
// console.log("Ok quit the app");

// const userAge = {
//   danial: 30,
//   ehsan: 50,
//   ali: 41,
//   asghar: 44,
// };

// for (let person in userAge){
//     console.log(person, userAge[person])
// }

// array
// const students = ['John', 'Sara', 'Jack'];

// using for...of
// for ( let element of students ) {

// display the values
//     console.log(element);
// }

// function danial() {
//   console.log("hello I'm new function");
// }

// const userAge = {
//   danial: 30,
//   ehsan: 50,
//   ali: 41,
//   asghar: 44,
// };

// let total = 0;
// let scores = Object.values(userAge);

// for (let skip of scores) {
//   total += scores;
// }
// console.log(total / scores.length);

// console.log(scores);

//   for (let score of scores) {
//     total += score;
//   }
//   console.log(total / scores.length);

// function user(Name) {
//   //   for (let i = 0; i < 10; ++i) {
//   //     console.log(i + 1, Name.toUpperCase());
//   //   }
//   console.log(Name);
// }

// function input(str, num) {
//   console.log(str, parseInt(num));
// }

// function isSnakeEyes(die1, die2) {
//   if (die1 === 1 && die2 === 1) {
//     console.log("Snake Eyes!");
//   } else {
//     console.log("Not Snake Eyes!");
//   }
// }

// function number(x, y) {
//   if (typeof x === "string" && typeof y === "string") {
//     return false;
//   } else {
//     return x + y;
//   }
// }

// function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     return false;
//   }
//   return x + y;
// }
