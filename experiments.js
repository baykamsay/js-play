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

// Part 12 BUILTINS
const sentence = "THis Is wEIrD";
console.log(sentence.toLowerCase());
// look at mdn

console.log(Math.round(3.4)); // min max floor ceil etc.
const str = "0123456789";
console.log(str.substr(6,3)); // use substring
sentence.to