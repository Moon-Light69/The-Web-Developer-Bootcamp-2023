const figlet = require("figlet");
const color = require("colors");

// figlet("Fuck to the Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...".rainbow);
//     console.dir(err);
//     return;
//   }
//   console.log(data.rainbow);
// });

// const fig = figlet("Hi I`m a promise", () => {
//   return new Promise(async (data, err) => {
//     try {
//       const data = await console.log(data);
//     } catch {
//       const err = await console.log("this is a error", err);
//     }
//   });
// });
// console.log(fig);

function generateFigletText(text) {
  return new Promise((resolve, reject) => {
    figlet(text, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function printFigletText() {
  try {
    const figletText = await generateFigletText("Hello World!!");
    console.log(figletText.rainbow);
  } catch (error) {
    console.log("Something went wrong...".rainbow);
    console.error(error);
  }
}

printFigletText();
