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
//      for (let i = 0; i < 10; ++i) {
//        console.log(i + 1, Name.toUpperCase());
//      }
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

// ========================================================================================
// ==========================================old===========================================
// ========================================================================================

// const userList = [
//   ["mahmoud", "zari", "danial", "sarina"],
//   ["majid", "marjan", "shiva", "arash", "anisa"],
//   ["farshid", "fhatemeh", "omid", "ayda"],
// ];

// for (user of userList) {
//   for (names of user) {
//     let i = 0;
//     i < user.length;
//     ++i;
//     console.log(`gorup:${i}`);
//   }
// }

// for (let i = 0; i < userList.length; ++i) {
//   console.log(`gorup number ${i + 1}`);
//   const row = userList[i];
//   for (j = 0; j < row.length; ++j) {
//     console.log(`Num:${j} Name:${row[j]}`);
//   }
// }

// const userAge = {
//   danial: 30,
//   ehsan: 50,
//   ali: 41,
//   asghar: 44,
// };

// let total = 0;
// let scores = Object.values(userAge);

// for (let score of scores) {
//   total += score;
// }
// console.log(total / scores.length);

// ========================================================================================
// ==========================================old===========================================
// ========================================================================================

// let number = 8;

// if (number > 0) {
//   const PI = 3.14159;
//   let msg = "HIII!";
//   console.log(msg);
//   console.log(PI);
// }

// for (var i = 0; i < 5; i++) {
//   var msg = "HELLO TO THE WORLD!";
//   console.log(i, msg);
// }
// console.log(msg);
// console.log(i);

// function bankRobbery() {
//   const heroes = ["Spiderman", "IronMan", "BlackPanther", "Hulk"];
//   function CryForHelp() {
//     function Inner() {
//       for (hero of heroes) {
//         console.log(`${hero} please save me!!!`);
//       }
//     }
//     Inner();
//   }
//   CryForHelp();
// }
// console.log(bankRobbery());

// function bankRobbery() {
//   const heroes = ["Spiderman", "IronMan", "BlackPanther", "Hulk"];
//   function CryForHelp() {
//     function Inner() {
//       for (let hero = 0; hero < heroes.length; ++hero) {
//         console.log(`${heroes[hero].toLocaleUpperCase()} please save me!!!`);
//       }
//     }
//     return Inner();
//   }
//   return CryForHelp();
// }
// bankRobbery();

// const add = function (x, y) {
//   return x * y;
// };

// console.warn("hi");
// console.error("Not Here!!!");
// document.write("welcome to our javaScript");

// function log() {
//   console.log("HI");
// }

// const enter = () => {
//   console.warn("BYE");
// };
// enter();

// const Number = function (x, y) {
//   return x + y;
// };

// const number = () => {
//   let number = "Don't do this to me!!!";
//   return number;
// };

// var radius = 8;
// if (radius > 0) {
//   var pi = 30;
//   var msi = "hello world";
// }
// console.log(pi);
// console.log(msi);

// function callTen(funcy) {
//   for (i = 0; i < 10; ++i) {
//     funcy();
//   }
// }

// ==================================================

// function calltwice(func) {
//   func();
//   func();
// }

// function callTen() {
//   for (let i = 0; i < 10; ++i) {
//     console.log(i);
//   }
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 5) + 1;
//   console.log(roll);
// }

// callTen(rollDie());

// console.log(callTen(rollDie()));

// -----------------------------------------------------

// function calltwice(func) {
//   func();
//   func();
// }

// function callTen(f) {
//   for (let i = 0; i < 10; ++i){
//     f()
//   }
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 5) + 1
//   console.log(roll)
// }

// callTen(rollDie)

// console.log(callTen(rollDie()))

// ==================================================

// function makeMysteryFunck() {
//   const rand = Math.random()
//   if (rand > 0.5) {
//     return function () {
//       console.log("yes well down")
//       console.log("that's look good")
//     }
//   } else {
//     return function() {
//       console.log("oh this isn't look good")
//     }
//   }
// }
// let funcReturn = makeMysteryFunck()
//   console.log(funcReturn())

// const myMath = {
//   number: 20,

//   userNumber: function (num) {
//     return num * num;
//   },
// };

// const myMath = {
//   number: 20,

//   userNumber(num) {
//     return num * num;
//   },
// };

// const cat = {
//   name: "Blue steele",
//   color: "Grey",
//   breed: "Scottish flod",
//   meow() {
//     // console.log("this is:", this);
//     console.log(`${this.name} says meowww`);
//   },
// };

// const meow2 = cat.meow();

// const hen = {
//   name: "Helen",
//   eggCount: 0,
//   layAnEgg: function () {
//     this.eggCount += 1;
//     return "EGG";
//   },
// };

// try {
//   hello.toUpperCase();
// } catch {
//   console.log("ERROR!!!");
// }

// function yell(msg) {
//   try {
//     console.log(msg.toUpperCase().repeat(3));
//   } catch {
//     console.log("please pass a string next time!!!");
//   }
// }

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// numbers.forEach(function (num) {
//   console.log(num);
// });

// console.log("=====================");
// numbers.forEach(function (num) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });

//  for (let num of numbers) {
//    console.log(num);
//  }

// const movies = [
//   {
//     title: "The Sea Beast",
//     score: "88",
//   },
//   {
//     title: "naval Action",
//     score: "43",
//   },
//   {
//     title: "hearts of iron 4",
//     score: "14",
//   },
//   {
//     title: "ck3",
//     score: "56",
//   },
//   {
//     title: "recep ivedik",
//     score: "24",
//   },
// ];

// movies.forEach(function (movie, num) {
//   console.log(`${num + 1}: ${movie.title} - ${movie.score} /100`);
// });

// for (let watch of movies) {
//   console.log(`${watch["title"]} --> ${watch.score}`);
// }

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// const dobles = numbers.map(function (Num, index) {
//   return index, Num * 2;
// });

// const dobles = numbers.map(function (Num, index) {
//   console.log(`${index}: ${Num}`);
// });

// const movies = [
//   {
//     title: "The Sea Beast",
//     score: "88",
//   },
//   {
//     title: "naval Action",
//     score: "43",
//   },
//   {
//     title: "hearts of iron 4",
//     score: "14",
//   },
//   {
//     title: "ck3",
//     score: "56",
//   },
//   {
//     title: "recep ivedik",
//     score: "24",
//   },
// ];

// movies.map(function (movie, num) {
//   console.log(`${num}: ${movie.title} --> Point: ${movie.score}`);
// });

// const add = function (x, y) {
//   console.log(x * y);
// };

// const add = (x, y) => {
//   console.log(x + y);
// };

// function add(x, y) {
//   console.log(x + y);
// }

// function number(num) {
//   return num * num;
// }

// let number = (num) => {
//   return num * 2;
// };

// const rand = () => {
//   return Math.floor(Math.random() * 5) + 1;
// };

// const random = function () {
//   return Math.floor(Math.random() * 5) + 1;
// };

// const rand = () => Math.floor(Math.random() * 5) + 1;

// const random = function () (
//     Math.floor(Math.random() * 5) + 1
// )

// const movies = [
//   {
//     title: "The Sea Beast",
//     score: "88",
//   },
//   {
//     title: "naval Action",
//     score: "43",
//   },
//   {
//     title: "hearts of iron 4",
//     score: "14",
//   },
//   {
//     title: "ck3",
//     score: "56",
//   },
//   {
//     title: "recep ivedik",
//     score: "24",
//   },
// ];

// const newMovies = movies.map(function (movie) (
//  `${movie.title} and ${movie.score}`
// ));

// const newMovies = movies.map( movie =>
//   ( `${movie.title} - ${movie.score} / 10`)
// );

// setTimeout(() => {
//   console.log("Hello welcome to our website")
// },5000)

// setTimeout(function () {
//   console.log("I'm so sad to see you go")
// },8000)

// const time = setInterval(function () {
//   console.log("Good Bye")
// },2000)

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// const fill = numbers.filter((num) => (
//    num === 10
// ))

// const movies = [
//   {
//     title: "amadeus",
//     score: 99,
//     year: 1984,
//   },
//   {
//     title: "sharknado",
//     score: 35,
//     year: 2013,
//   },
//   {
//     title: "13 going on 30",
//     score: 70,
//     year: 2004,
//   },
//   {
//     title: "stand by me",
//     score: 85,
//     year: 1986,
//   },
//   {
//     title: "waterworld",
//     score: 62,
//     year: 1995,
//   },
//   {
//     title: "jingle all way",
//     score: 71,
//     year: 1996,
//   },
//   {
//     title: "parasite",
//     score: 95,
//     year: 2019,
//   },
//   {
//     title: "notting hill",
//     score: 77,
//     year: 1999,
//   },
//   {
//     title: "alien",
//     score: 90,
//     year: 1979,
//   },
// ];

// const goodMovies = movies.filter((m) => m.score > 80);

// const badMovies = movies.filter(function (m) {
//   return m.score < 70;
// });

// const recentMovies = movies.filter((m) => m.year > 2000);

// const goodTitles = goodMovies.map((m) => m.title);

// //=======================================================//
// const every = movies.every(function (movie){
//      return movie.year >= 2015})
// const some = movies.some((film) => (film.year >= 2015))
// //=======================================================//
// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// numbers.every(function (num){return num <= 75})
// numbers.some((num) => (num > 100))

// =======================================================//
// const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)

// let all = 0;
// for (i = 0; i < prices.length; i++){
//     let price = prices[i];
//     total += price;
// }
// console.log(total)

// NEW //

// const cash = prices.reduce(function (total, price){
//     return total += price
// })

// const minPrice = prices.reduce((min, price) => {
//     if (price < min){
//         return price
//     }
//     return min
// })

// const movies = [
//   {
//     title: 'amadeus',
//     score: 99,
//     year: 1984
//   },
//   {
//     title: 'sharknado',
//     score: 35,
//     year: 2013
//   },
//   {
//     title: '13 going on 30',
//     score: 70,
//     year: 2004
//   },
//   {
//     title: 'stand by me',
//     score: 85,
//     year: 1986
//   },
//   {
//     title: 'waterworld',
//     score: 62,
//     year: 1995
//   },
//   {
//     title: 'jingle all way',
//     score: 71,
//     year: 1996
//   },
//   {
//     title: 'parasite',
//     score: 95,
//     year: 2019
//   },
//   {
//     title: 'notting hill',
//     score: 77,
//     year: 1999
//   },
//   {
//     title: 'alien',
//     score: 90,
//     year: 1979
//   },
// ]

// const highestRated = movies.reduce((bestMovie, currMovie) => {
//     if (currMovie.score < bestMovie.score) {
//         return currMovie
//     }
//     return bestMovie
// })

// const evens = [2, 4, 6, 8];
// evens.reduce((sum, num) => sum + num, 100 )

// const list = {
//   Name: "serkan",
//   lastName: "bolat",
//   fullName: function () {
//     console.log(this.Name, this.lastName)
//   }
// }

// function rollDie(numSide) {
//   if (numSide === undefined || NaN) {
//     numSide = 6;
//   }
//   return Math.floor(Math.random() * numSide) + 1;
// }

// function rollDie(numSide = 6 || !(numSide === undefined && NaN)) {
//   return Math.floor(Math.random() * numSide) + 1;
// }

// function greet(person, msg = "Hey there", punc = "!") {
//   console.log(`${msg}, ${person}${punc}`);
// }

// const numbers = [13, 4, 5, 21, 3, 3, 1, 2, 7, 5, 6, 4, 2, 53456];

// Math.max(...numbers);
// Math.min(...numbers);

// const cats = ["Blue", "Scout", "Rocket"];
// const dogs = ["Rusty", "Wyatt"];

// const allpets = [...cats, ...dogs];
