// // Part 1
// const monthlyRent = 500;
// const yearlyRent = monthlyRent * 12;
// console.log(monthlyRent, yearlyRent);

// // Part 2
// const firstName = 'Baykam'; // Same as "Baykam Say" and `Baykam Say`
// const lastName = 'Say';
// const sentence = `Hello ${firstName} ${lastName}! How are you?`;
// console.log(sentence)

// // Part 3
// const isTheSkyBlue = true; // lets are undefined at first
// console.log(isTheSkyBlue);

// // Part 4
// const num = 5;
// console.log(num);

// // Part 5
// const isSkyBlue = false;

// let greeting;

// if (isSkyBlue) {
//     greeting = "It must be nice weather";
// } else {
//     greeting = "It must be bad weather";
// }

// console.log(greeting);

// // Part 6
// if (2 + 2 === 4) { // == works too but coercion might cause errors
//     console.log("Yeey!");
// } else {
//     console.log("Oh no...");
// }

// Part 7
// <= comparator

// // Part 8
// let friendsAtYourParty = 0;

// while (friendsAtYourParty < 10) {
//     // console.log(friendsAtYourParty);
//     friendsAtYourParty = friendsAtYourParty + 1;
// }

// console.log(friendsAtYourParty);

// Part 9
// Comments: // and /* */

// Part 10
// Add +=
// Increment++

// // Part 10
// let friendsAtYourParty = 0;

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     friendsAtYourParty++;
// }

// console.log(friendsAtYourParty);

// // Part 11
// function addTwo(num) {
//     return num + 2;
// }

// function getFive() {
//     return 5
// }

// function add(num1, num2) {
//     return num1 + num2;
// }

// const finalAnswer = addTwo(5);
// const test = getFive();
// const test2 = getFive;
// console.log(finalAnswer);
// console.log(add(4,6));
// console.log(test2()); // weird

// // Part 12 BUILTINS
// const sentence = "THis Is wEIrD";
// console.log(sentence.toLowerCase());
// // look at mdn

// console.log(Math.round(3.4)); // min max floor ceil etc.
// const str = "0123456789";
// console.log(str.substr(6,3)); // use substring
// sentence.to

// // OBJECTS Part 13
// const person = {
//     name: "Brian Holt", // look at commas
//     city: "Seattle",
//     state: "WA",
//     favoriteFood: "🌮",
//     wantsTacosRightNow: true,
//     numberOfTacosWanted: 100 // optional comma
//   }; // dont forget semi 
//   console.log(person);
//   console.log(person.name);
// //   console.log(person["name"]); // same as the line above; definitely prefer using the other one

// // functions inside objects are called functions

// const dog = {
//     name: "dog",
//     speak() { // old way: speak: function() {do stuff}
//       console.log("woof woof");
//     }
//   };
  
//   dog.speak();

//   // objects can be nested

// // ARRAYS Part 14
// // List and array same
// const daysOfTheWeek = [ // better to have same types
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday"
//   ];
//   console.log(daysOfTheWeek);
//   console.log(daysOfTheWeek[0]);

//   const arr = [1, 4, 5];

//   console.log(arr[2]);
//   console.log("Length:", arr.length);
//   console.log(arr.join(", "))

//   const courses = [
//     { teacher: "Kyle Simpson", course: "JS Function Lite" },
//     { teacher: "Sarah Drasner", course: "Intro to Vue" },
//     { teacher: "Brian Holt", course: "Complete Intro to React v3" },
//     { teacher: "Steve Kinney", course: "State Management" }
//   ];

//   courses.push({teacher: "David", course: "CS 101"});
//   const course = courses.pop();
//   const subarr = courses.splice(2, 2); 
//   console.log(typeof "Cool");

// // FOREACH Part 15
// const cities = [
//     "Seattle",
//     "San Francisco",
//     "Salt Lake City",
//     "Amsterdam",
//     "Hong Kong"
// ];

// cities.forEach(function(city, index) {
//     console.log(city);
// });

// const someFunction = function() {return 1};

// // MAP
// const newCities = cities.map(function(city) { // get an array and transform into something else
//     return city.toUpperCase();
// });

// console.log(newCities);

// SORT Part 16
const arr = [4, 63, 3, 6, 7, 2, 8, 5, 35];

console.log(arr.sort(function(a, b) { // gets comparator funciton as a parameter
    return a - b;
}));

// ARROW FUNCTIONS
console.log(arr.sort((a, b) => {
    return b - a;
}))

// implicit return
console.log(arr.sort((a, b) => a - b)); // if one param paranthesis are optional

// filter
console.log(arr.filter(num => num % 2).sort((a, b) => a - b));

// === not !==, && and, || or
// .includes for strings