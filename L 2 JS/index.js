// 1. Let 

// let name = "MBS Coding";
// let age = 25;
// let age = 27;
// age = 30;
// console.log(name, age);

// 2. Const

// const account = 1234;
// account = 200;
// const account = 5678;
// console.log(account);

// 3. Var

// var a = 10;
// a = 20;
// var a = 30;
// console.log(a);

// Var - Not Respect Scope {}

// if(true){
//   var a = 20;
// }
// console.log(a);

// Var Respect - Global Scope & Functional Scope

// function fun(){
//   var c = 30;
// }
// var d = 50;
// console.log(c);
// console.log(d);

// Let Respect - Any Scope {}, fun(){}, G.S

// if(true){
//   let c = 90;
// }
// console.log(c);

// Data Types in JS

// 1. Premitive Data Type 

// Number, String, Boolean, Undefined, Null, Bigint, Symbol

// Number

// let a = 10;
// let b = 2.45;
// console.log(typeof(b));
// console.log(a, b);

// String

// let c = "MBS Coding";
// let d = 'Official';
// console.log(typeof(d));
// console.log(c,d);

// Boolean

// let login = true;
// let f = false;
// console.log(typeof(login));
// console.log(login, f);

// Undefined

// let user;
// console.log(typeof(user));
// console.log(user);
// user=true;
// console.log(user);

// const user;
// console.log(user);

// Bigint

// let num = 1234567890987654321n;
// console.log(typeof(num));
// console.log(num);

// Null

// let weather = null;
// console.log(typeof(weather));
// console.log(weather);

// Symbol - Unique value create

// const id1 = Symbol("id");
// console.log(typeof(id1));
// console.log(id1);
// const id2 = Symbol("id");
// console.log(id2);
// console.log(id1==id2);

// 2. Non Premitive Data Type

// NPD : Array, Object, Function

// Array 

// let arr = [10,12,14.4,"MBS Coding",true];
// console.log(typeof(arr));
// console.log(arr);

// Object - Key value pair + Meaning

// let user = {
//   name:"MBS Coding",
//   account:12345,
//   age:25,
//   category:'general'
// }
// console.log(typeof(user));
// console.log(user);

// Function 

// function add(){
// console.log("Hello");
// }
// add();

// JS Fun - var stored

// let s = function add(){
//   console.log("MBS Coding");
// }
// console.log(typeof(s));
// console.log(s);
// s();

// Premitive data type is immutable - Not change

// let a = 20;
// console.log(a);
// a = 30;
// console.log(a);


// Immutability Proof 

// let str = "MBS Coding";
// str = "MBS Coding Official";
// str[0] = "O";
// console.log(str);

// PD - Pass by value or Copy by value

// let a = 10;
// let b = a;
// b = 20;
// console.log(a,b);


// Non Premitive Data Type => Mutable - Change

// let arr = [10,20,30,40];
// arr[0] = 50;
// console.log(arr);
// arr.push(60);
// console.log(arr);

// Object - Immutable => Change

// let obj = {
//   name:"MBS",
//   age:25
// }
// console.log(obj.name);
// obj.name = "MBS Coding";
// console.log(obj);

// Obj = Pass by refrence Or Refrence Copy 

// let obj = {
//   name:"MBS Coding",
//   age:25
// }
// console.log(obj);
// let obj2 = obj;
// console.log(obj2);
// obj2.name = "MBS Coding Official";
// console.log(obj2);
// console.log(obj);
