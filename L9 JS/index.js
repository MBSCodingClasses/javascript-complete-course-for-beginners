// Function

// function greeting(){
//   console.log("Namskar MBS Coding JavaScript Course");
// }

// function addNumber(num1,num2){
// const sum = num1 + num2;
// console.log(sum);
// }

// addNumber(3,4);
// greeting();
// addNumber(6,7);
// console.log(greeting);
// console.log(addNumber);

// Return

// function greeting(){
//   console.log("Namskar MBS Coding JavaScript Course");
//   return 10;
// }

// function addNumber(num1,num2){
// const sum = num1 + num2;
// console.log(sum);
// }

// console.log(greeting);
// console.log(addNumber);

// console.log(greeting());

// Why We Need Rest Operator ?

// function addNumber(num1,num2,num3=0,num4=0){
// const sum = num1 + num2 + num3 + num4;
// console.log(sum);
// }
// addNumber(6,7);
// addNumber(6,7,8);
// addNumber(6,7,8,9);
// addNumber(6,7,8,9,10);

// Rest Operator :
// Very Powerful
// New Array Create - Put Arguments

// function addNumber(...num){
// console.log(num);
// }
// addNumber(7,8,9,10,11,12,13,14,15,16,17);

// Rest - Add

// function addNumber(...num){
// let sum = 0;
// for(let n of num){
//   sum+=n;
// }
// console.log(sum);
// }
// addNumber(7,8,9,10,11,12,13,14,15,16,17);
// addNumber(1,2);
// addNumber(3,5,8);

// Spread vs Rest

// Destructuring of Array : Rest

// const arr = [10,20,30,40,50];
// const [first,second] = arr;
// console.log(first,second);

// Catch - rest

// const arr = [10,20,30,40,50];
// const [first,second,...num] = arr;
// console.log(first,second,num);

// Spread - array spread / new array / attach 2 array

// const arr1 = [10,20,30,40,50,60];
// const arr2 = [70,80,90,100,110,120];
// const ans = [...arr1,...arr2];
// console.log(ans);

// function => variable hold / store

// const addNumber = function(num1,num2){
//   return num1 + num2;
// }
// console.log(addNumber);
// console.log(addNumber(3,4));

// Limitation / Rule => Var fun hold

// console.log(addNumber(3, 4));

// const addNumber = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(addNumber(3, 4));

// function name - fun => call first define letter ✅

// console.log(addNumber(3,4));

// function addNumber(num1,num2){
// return num1 + num2;
// }
// console.log(addNumber(3,4));

// Arrow Function

// const addNumber = (num1,num2) => {
// return num1 + num2;
// }
// console.log(addNumber(3,4));

// Only return
// no return keyword
// no curly braces

// const addNumber = (num1, num2) => num1 + num2;
// console.log(addNumber(3, 4));

// Sorting :

// let arr = [10,11,19,7,50];
// arr.sort((a,b) => a - b);
// console.log(arr);

// Arrow Function :
// Bracket no need - single parameter
// {} & return no need - only you return

// const squareNumber = num => num*num;
// console.log(squareNumber(6));

// Arrow Function
// Return Object - Extra Bracket ✅

// const greeting = () => ({name:"MBS",age:25});
// console.log(greeting());

// IIFE : Immediately Invoke Function
// Run / Invoke Function - Now / Immediately
// (create function in 1st bracker)(call that function)

// ()();

// (function greeting(){
// console.log("MBS Coding");
// }
// )();

// IIFE + Arrow Function

// (() => {
// console.log("Namskar");
// }
// )();

// Callbacks :
// 1st Function => As a argument 2nd Function Pass ✅

// function greet(){
//   console.log("Namskar Dosto");
// }

// function meet(){
//   console.log("I am going to meet someone");
// }

// meet();
// greet();

// callback practical

// function greet(){
//   console.log("Namskar Dosto");
// }

// function meet(callback){
//   console.log("I am going to meet someone");
//   callback();
// }

// meet(greet);
// greet();

// Why Callback :
// Reusable + Flexible ✅
// Hardcode / Handwritten ❌

// function greet() {
//   console.log("Namskar Dosto");
// }

// function dance() {
//   console.log("I am dancing");
// }

// function meet(callback) {
//   console.log("I am going to meet someone");
// dance();
//   callback();
// }

// meet(greet);
// meet(dance);

// Callback Real Life Example :

// Zomato + Blinkit :
// 0. Want to give Order
// 1. payment initialized
// 2. payment recieved
// 3. zomato / blinkit - started preparing your food / order

// Flexible + Reuse 

function blinkitOrderPlaced(){
  console.log("We have started packing your order");
}

function zomatoOrderPlaced(){
  console.log("We have started preparing your food");
}

function payment(amount,callback){
  console.log(`${amount} payment has initilized`);
  console.log("Payment is received");
  callback();
}

payment(500,zomatoOrderPlaced);
payment(300,blinkitOrderPlaced);

