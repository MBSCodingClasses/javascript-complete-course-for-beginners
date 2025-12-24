// Object

// const user = {
//   name:"MBS",
//   age:25,
//   emailId:"mbs@gmail.com",
//   amount:3400
// }
// console.log(user);
// console.log(typeof(user));

// CRUD - Object

// Read / Access

// console.log(user.name);
// console.log(user.age);
// console.log(user.emailId);
// console.log(user.amount);

// Update

// user.amount = 5000;
// console.log(user);

// Create

// user.aadhar = 123456789;
// console.log(user);

// Delete

// delete user.emailId;
// console.log(user);

// Behind The Scene
// How Key Stored ?
// Note : BTS Key - String Form Stored

// const user = {
//   name:"MBS",
//   age:25,
//   emailId:"mbs@gmail.com",
//   amount:3400
// }
// console.log(user["name"]);
// console.log(user["age"]);
// console.log(user["emailId"]);
// console.log(user["amount"]);

// const user = {
//   name: "MBS",
//   age: 25,
//   emailId: "mbs@gmail.com",
//   amount: 3400,
//   "home address ": "pune",
// };
// console.log(user.name);
// console.log(user.age);
// console.log(user.emailId);
// console.log(user.amount);
// console.log(user["home address "]);

// Object - copy by reference => Address Copy
// 2 diff object - same object => point out / refer
// 1 object change - 2nd object changes => reflect

// const user = {
//   name: "MBS",
//   age: 25,
//   emailId: "mbs@gmail.com",
//   amount: 3400,
// }

// const user2 = user;
// user2.age = 90;
// console.log(user);

// Key Value Print - VIMP

// const user = {
//   name: "MBS",
//   age: 25,
//   emailId: "mbs@gmail.com",
//   amount: 3400,
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for in Loop - Object

// const user = {
//   name: "MBS",
//   age: 25,
//   emailId: "mbs@gmail.com",
//   amount: 3400,
// };

// for(let keys in user){
//   console.log(keys);
// }

// for(let keys in user){
//   console.log(keys, user[keys]);
// }

// Invalid

// for(let keys in user){
//   console.log(keys, user.keys);
// }

// Destructuring - Object

// const user = {
//   name: "MBS",
//   age: 25,
//   emailId: "mbs@gmail.com",
//   amount: 3400,
// };

// const name = user.name;
// const age = user.age;
// const amount = user.amount;
// console.log(name, age, amount);

// Object Destructuring

// const {name,age,amount} = user;
// console.log(name,age,amount);

// Destructuring of Array

// const arr = [10,20,30,40,50];
// const [first,second] = arr;
// console.log(first,second);

// Object Destructing Part 2 : New Variable - Not Similar Like Keys

// const user = {
//   name: "MBS",
//   age: 25,
//   emailId: "mbs@gmail.com",
//   amount: 3400,
// };

// const { name: userName, age: userAge, amount: userAmount } = user;
// console.log(userName, userAge, userAmount);

// for of loop
// Array ✅
// Object Direct ❌

// const user = {
//   name: "MBS",
//   age: 25,
//   emailId: "mbs@gmail.com",
//   amount: 3400,
// };

// const temparr = Object.keys(user);
// console.log(temparr);

// for(let keys of temparr){
//   console.log(keys);
// }

// const temparr2 = Object.values(user);
// console.log(temparr2);

// for(let values of temparr2){
//   console.log(values);
// }

// for(let values of Object.values(user)){
//   console.log(values);
// }

// Revision keys, Values & Entries

// const user = {
//   name: "MBS",
//   age: 25,
//   emailId: "mbs@gmail.com",
//   amount: 3400,
// };

// for(let keys of Object.keys(user)){
//   console.log(keys);
// }

// for(let values of Object.values(user)){
//   console.log(values);
// }

// for(let entries of Object.entries(user)){
//   console.log(entries);
// }

// Use Destructuring Array => Print - Key Value

// for(let [keys,values] of Object.entries(user)){
//   console.log(keys, values);
// }

// Object => Function Create ✅

// const user = {
//   name: "MBSCoding",
//   age: 25,
//   emailId: "mbs@gmail.com",
//   amount: 3400,
//   greeting: function(){
//     console.log(`JavaScript Course by ${user.name}`);
//     return 20;
//   }
// };

// const va = user.greeting();
// console.log(va);

// This Keyword

// const user = {
//   name: "MBSCoding",
//   age: 25,
//   emailId: "mbs@gmail.com",
//   amount: 3400,
//   greeting: function(){
//     console.log(`JavaScript Course by ${this.name}`);
//     return 20;
//   }
// };

// const va = user.greeting();
// console.log(va);

// Proublem

// const user = {
//   name: "MBSCoding",
//   age: 25,
//   emailId: "mbs@gmail.com",
//   amount: 3400,
//   greeting: function () {
//     console.log(`JavaScript Course by ${user.name}`);
//     return 20;
//   },
// };

// const user2 = {
//   name: "Raju",
//   account: 101,
//   //   greeting: function () {
//   //   console.log(`JavaScript Course by ${user.name}`);
//   //   return 20;
//   // },
// };

// user2.greeting = user.greeting;
// console.log(user2);

// user2.greeting();

// const va = user.greeting();
// console.log(va);

// this keyword vimp

// const user = {
//   name: "MBSCoding",
//   age: 25,
//   emailId: "mbs@gmail.com",
//   amount: 3400,
//   greeting: function () {
//     console.log(`JavaScript Course by ${this.name}`);
//     return 20;
//   },
// };

// const user2 = {
//   name: "Raju",
//   account: 101,
//   //   greeting: function () {
//   //   console.log(`JavaScript Course by ${user.name}`);
//   //   return 20;
//   // },
// };

// user2.greeting = user.greeting;
// console.log(user2);

// user2.greeting();

// const va = user.greeting();
// console.log(va);

// Nested Object

// const user = {
//   name: "MBSCoding",
//   age: 25,
//   emailId: "mbs@gmail.com",
//   amount: 3400,
//   address:{
//     city:"Pune",
//     State:"Maharastra"
//   }
// };

// console.log(user);
// console.log(user.address);
// console.log(user.address.city);
// console.log(user.address.State);

// Object - Refrance Copy / Address Copy
// Both Object - Same Object => Refer / Point Out
// 1 Object Change => 2nd - Changes Reflect

// const user = {
//   name: "MBSCoding",
//   age: 25,
//   emailId: "mbs@gmail.com",
//   amount: 3400,
//   address: {
//     city: "Pune",
//     State: "Maharastra",
//   },
// };

// const user2 = user;
// user2.name = "Raju";
// user2.address.city = "Mumbai";
// console.log(user2);
// console.log(user);

// Shallow Copy / Independent Copy - Spread Operator
// 1 Level Handle ✅ => Independent Copy ✅
// Nested 2 Level Handle ❌ - Same Object Refer / Address Same
// Nested - 1 Changes ✅ => 2 Changes Reflect

// const user = {
//   name: "MBSCoding",
//   age: 25,
//   emailId: "mbs@gmail.com",
//   amount: 3400,
//   address: {
//     city: "Pune",
//     State: "Maharastra",
//   },
// };

// const user2 = {...user};
// // user2.name = "Rahul";
// // console.log(user2);
// // console.log(user);

// user2.address.city = "Delhi";
// console.log(user2);
// console.log(user);

// Deep Copy - Independent Copy ✅
// Nested Handle - ✅

// const user = {
//   name: "MBSCoding",
//   age: 25,
//   emailId: "mbs@gmail.com",
//   amount: 3400,
//   address: {
//     city: "Pune",
//     State: "Maharastra",
//   },
// };

// const user2 = structuredClone(user);
// user2.address.city = "Nashik";
// console.log(user2);
// console.log(user);

// Keys - Number Format 0: ✅
// Because - String Format Store => BTS

// const user = {
//   name: "MBS",
//   age: 25,
//   0: 100,
//   1: 200,
//   2: "Raju",
// };
// console.log(user[0]);
// console.log(user["1"]);
// console.log(user[2]);

// Array - BTS => Object Format Stored
// Key:Value

// user = [10,20,30];

// user = {
// 0:10,
// 1:20,
// 2:30
// }

// Key => String or Symbol Format Stored

// const sym = Symbol("id");

// const user = {
//   name: "MBS",
//   age: 25,
//   0: 100,
//   [sym]: "Namskar Dosto",
// };

// console.log(user[sym]);
