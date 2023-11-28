// function rgb(r, g, b) {
//   return rgb(${r}, ${g}, ${b})
// }

// const { formToJSON } = require("axios");

// function makeColor(r, g, b) {
//   const color = [];
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function() {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
//   };
//   color.hex = function() {
//     const { r, g, b } = this;
//     return (
//       '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//     );
//   };
//   return color;
// }

// const firstColor = makeColor(35, 255, 150);

// console.log(firstColor.rgb());
// console.log(firstColor.hex());

// function color(r, g, b) {
//   this.red = r;
//   this.green = g;
//   this.blue = b;
// };

// color.prototype.RGB = function () {
//   const { red, green, blue } = this;
//   return `RGB(${red}, ${green}, ${blue})`;
// };

// color.prototype.hex = function () {
//   const { red : redd, green, blue } = this;
//   return "#" + ((1 << 24) + (redd << 16) + (green << 8) + blue).toString(16).slice(1);
// };

// const color1 = new color(40, 50, 60);
// const color2 = new color(0, 0, 0);

// console.log(color1.RGB())

// //===================================================================================

// function makeColor(r, b, g) {
//   const color = {}
//   color.r = r
//   color.g = g
//   color.b = b
//   color.rgb = function() {
//     const {r, g, b} = this
//     console.log(`RGB(${r}, ${g}, ${b})`)
//   };
//   return color
// }

// const firstColor = makeColor(35, 255, 150)
// firstColor.rgb()

// const user = function (esm, userAge, country) {
//   this.userName = esm;
//   this.userAge = userAge;
//   this.country = country;
//   console.log(this);
// };

// const danial = new user("danial", 20, "iran");
// const sarina = new user("sarina", 10, "Turkiye");

// //================================================================

// const { formToJSON } = require("axios");

//   function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//       const { r, g, b } = this;
//       return `rgb(${r},${g},${b})`;
//     };
//     color.hex = function() {
//       const { r, g, b } = this;
//       return (
//         '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//       );
//     };
//     return color;
//   }

//   const firstColor = makeColor(35, 255, 150);
// { r: 35, g: 255, b:150, rgb: function() {
//       const { r, g, b } = this; // concept 1 : object destruction concept 2: this
//       return `rgb(${r},${g},${b})`;
//     }, hex: function() {
//       const { r, g, b } = this;
//       return (
//         '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//       );
//     }}

//   console.log(firstColor.rgb());
//   console.log(firstColor.hex());

// function color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// };

// color.prototype.RGB = function () {
//   const { r, g, b } = this;
//   return `RGB(${r}, ${g}, ${b})`;
// };

// color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// const color1 = new color(40, 50, 60);
// color1 ---> {r:40, g:50, b: 60}
// color1.hex()
// const color2 = new color(0, 0, 0);
// color2 ---> {r:0, g:0, b: 0}

// data types in JS:
// 1) primitive
// 2) reference

// let temp = 4;
// const temp2 = "Danial";
// let temp3 = 4.5;
// const temp4 = true;

// let listOfAges = [1,2,3,4,5,65];
// listOfAges[2] -------> listOfAges + 2
// listOfAges[7] -------> listOfAges + 7
// listOfAges.pop()
// listOfAges.push()

// const listOfFeatures = { age : 23, name:"Danial", city: "toronto"};
// listOfFeatures.country = "Canada";

// const listOfFeatures = { age : 23, name:"Danial", city: "toronto", country: "canada"};

// const  {age : humanAge, name : userName} = listOfFeatures;

// printAgeAndName(humanAge , userName);

// function printAgeAndName (age = 24, name) {
// 	console.log(age + "   " + name);
// }

// function Human(height, IQ, race){
// 	this.humanHeight = height;
//   this.intelligence = IQ;
//   this.skinColor = race;
// }

// const Danial = new Human("tall", "smart", "white");
// console.log(Danial.intellignce);   ////

// const Ehsan = new Human("avg", "avg", "dark");

// console.log(Ehsan.height);

// //==========================================================================================
// //                           how to make a class in JS
// //==========================================================================================

// class Color {
//   constructor(r, g, b, name) {
//     this.red = r;
//     this.green = g;
//     this.blue = b
//     this.colorName = name
//   }
//   hello() {
//     console.log(`Hello from ${this.colorName}`);
//   }
//   innerRGB() {
//     const {red : redd, green, blue} = this
//     return `${redd}, ${green}, ${blue}`
//   }
//   RGB() {
//     return `RGB(${this.red}, ${this.green}, ${this.blue})`
//   }
//   rgba(a = 1.0) {
//     return `rgba(${this.innerRGB()}, ${a})`
//   }
//   hex() {
//     const {red : redd, green, blue} = this
//     return "#" + ((1 << 24) + (redd << 16) + (green << 8) + blue).toString(16).slice(1);
//   }
// }

// const c1 = new Color(231, 123, 41, 'orange');
// console.log(c1);

// class pets {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   eat() {
//     return ${this.name}
//   }
// }

// class cat extends pets{
//   constructor(name, age, livesLeft = 9) {
//     super(name, age)
//     this.left = livesLeft
//   }
//   meow() {
//     return "MEOWWWW!!!"
//   }
// }

// class dog extends pets {
//   bark() {
//     return "WOOOOOF!!!"
//   }
//   eat() {
//     return this.name
//   }
// }

// class pets {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   eat() {
//     return `${this.name} is eating!`
//   }
// }

// class cat extends pets{
//   constructor(name, age, livesLeft = 9) {
//     super(name, age)
//     this.left = livesLeft
//   }
//   meow() {
//     return "MEOWWWW!!!"
//   }
// }

// class dog extends pets {
//   bark() {
//     return "WOOOOOF!!!"
//   }
//   eat() {
//     return `${this.name} give back his food!!!`
//   }
// }

class school {
  constructor(name, family) {
    this.nam = name;
    this.fa = family;
  }
  who() {
    const { nam } = this;
    console.log(`Hi my name is: ${nam} and my family:${this.fa}`);
  }
}

class englishClass extends school {
  constructor(name, family, age) {
    super(name, family);
    this.age = age;
  }
  student() {
    const { nam, fa, age } = this;
    console.log(
      `Hi my name is: ${nam} and my family:${fa} and I born in ${age}`
    );
  }
}
