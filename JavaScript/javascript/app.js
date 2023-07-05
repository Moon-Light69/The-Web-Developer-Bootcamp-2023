// let random = math.random();
// if (random < 0.5) {
//     console.log("your number is less")
//     console.log(random);
// }

// const age = prompt("please enter your age")

// if (age < 5) {
//     console.log('it is free for you beacuse you are a baby')
// } else if (age < 10) {
//     console.log("you must pay $20")
// } else {
//     console.log("do not do this again, okay!??")
// }

// const password = prompt("please enter your password")

// if (password.length >= 6){
//     console.log("well done")
// } else{
//     console.log("it is a short password")
// }

// if (password.indexOf(' ') === -1){
//     console.log("good job")
// } else{
//     console.log("it is not good body")
// }

// const userInput = prompt('enter a wold')

// if (userInput){
//     console.log("well down!!!")
// } else{
//     console.log("heeey enter somethink")
// }

// let userInput = prompt("enter a password")

// if (userInput.length >= 6 && userInput.indexOf(" ") === -1) {
//     console.log("well down it is awsome")
// } else{
//     console.log("nope it is false")
// }

// var userInput = prompt("enter a number");

// if (userInput < 0 && userInput > 5) {
//     console.log("sorry we can not sell this to you!!!");
// } else if (!(userInput >= 5 && userInput <= 100)) {
//     console.log("yeeeeeeeeeees it is working");
// }

// const lang = 4

// switch (lang) {
//     case 1:
//         console.log("hello");
//         break

//     case 2:
//         console.log("merhaba")
//         break

//     case 3:
//         console.log("سلام")
//         break

//     default:
//         console.log("it is nit a lang")
// }

// for (let number = 10; number >= 10; number++){
//     console.log(number)
// }

// let userlist = {
//     userName : "danial",
//     userLastName : "givi ghobadi",
// };

// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }

// for(var i = 20; i >= 0; i--){
//     console.log(i)
// }

// const userList = [
//     "danial",
//     "sarina",
//     "zari",
//     "mahmoud",
//     "marjan",
//     "majid"
// ]

// for (let i = 0; i < userList.length; i++){
//     console.log(i, userList[i])
// }

// for (let i = userList.length - 1; i >= 0; i--) {
//     console.log(i, userList[i])
// }

// for (let i = 0; i <= 10; ++i){
//     console.log(`it's a number ${i}`)
//     for (let j = 0; j <= 3; ++j){
//         console.log(`   this is a group ${j}`)
//     }
// }

// const userList = [
//     ["mahmoud", "zari", "danial", "sarina"],
//     ["majid", "marjan", "shiva", "arash", "anisa"],
//     ["farshid", "fhatemeh", "omid", "ayda"],
// ];

// for (let i = 0; i < userList.length; ++i) {
//     const row = userList[i]
//     console.log(`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j++){
//         console.log(row[j])
//     }
//  }

// const secret = "I love parastu"

// let askUser = prompt("enter our secret please")

// while (askUser !== secret){
//     askUser = prompt("please the secret again")
// }
// console.log("well down you didn't forget the secret")

// for (let i = 0; i <= 100; ++i){
//     console.log(i, "I love you parastu")
// }

// const input = prompt("say somethink")

// while (true) {
//     input = prompt(input);
//     if (input === "i love parastu") {
//         break;
//     }
// }

// console.log("what did you say!?")

// for (let i = 0; i <= 100; ++i) {
//     for (j = "hi"; j <=3;) {
//     }
//     console.log(i, j)
// }

// for (let i = 0; i <= 10; ++i){
//     console.log(`it's a number ${i}`)
//     for (let j = 0; j <= 3; ++j){
//         console.log(`   this is a group ${j}`)
//     }
// }

// for (let i = 0; i <= 1000; ++i){
//     console.log(i);
//     if (i === 100) break;0
// }

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = prompt("Enter your first guess! (Type 'q' to quit)");
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     guess = parseInt(guess);
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:");
//         attempts++;
//     } else if (guess < targetNum) {
//         guess = prompt("Too low! Enter a new guess:");
//         attempts++;
//     } else {
//         guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
//     }
// }

// if (guess === 'q') {
//     console.log("OK, YOU QUIT!")
// } else {
//     console.log("CONGRATS YOU WIN!")
//     console.log(`You got it! It took you ${attempts} guesses`)
// }

// const numbers = [1,2,3,4,5,6,7,8,9];

// for (let num of numbers) {
//     console.log(num + num);
//   }

// const userList = [
//     ["Danial", "Sarina"],
//     ["Mahmoud", "zari"],
//     ["EhsanShirani"]
// ]

// for ( let i = 0; i < userList.length; ++i){
//     const row = userList[i];
//     console.log(`userList # ${i + 1}`);
//     for (let j = 0; j < row.length; ++j){
//         console.log(row[j])
//     }
// }

// let user = ["Mahmoud", "Zari", "Danial", "Sarina"];
// let i = 0;

// for (let i = 0; i < user.length; ++i){
//     console.log(`UserName = ${user[i]}`)
// }

// =========================== //
// while (i < user.length){
//     console.log(user[i])
//     ++i
// }

// let i = 0
// let j = 10

// while (i < 10){
//     console.log(i)
//     i++
// }

// let user = ["Mahmoud", "Zari", "Danial", "Sarina"];

// for (let userName of user){
//     console.log(userName)
// }

// const users = [
//     ["mahmoud", "zari", "danial", "sarina"],
//     ["majid", "marjan", "shiva", "arash", "anisa"],
//     ["farshid", "fhatemeh", "omid", "ayda"],
// ];

// for (let userName of users){
//     for (let Names of userName){
//         console.log(`Name = ${Names}`)
//     }
// }

// const userAge = {
//     danial: 30,
//     ehsan: 50,
//     ali: 41,
//     asghar: 44,
// }

// for (let person in userAge){
//     console.log(person, userAge[person])
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
