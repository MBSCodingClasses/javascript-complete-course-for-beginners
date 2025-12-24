// Number Data Type

// let a = 10;
// let b = 345.6821;
// console.log(typeof(a));
// console.log(a);
// console.log(typeof(b));
// console.log(b);

// toFixed() - string return 

// let a = 245.6821;
// console.log(typeof(a));
// console.log(a.toFixed(2));
// console.log(a.toFixed(1));
// console.log(typeof(a.toFixed(2)));

// toFixed() - new string return : p.d - immutable / not change

// let b = 145.6821;
// console.log(typeof(b));
// let c = b.toFixed(1);
// console.log(typeof(c));
// console.log(c);

// toPrecision() - Precised Value ? - New String Return

// let b = 445.6821;
// console.log(b.toPrecision(4));
// console.log(typeof(b.toPrecision(4)));

// toString() - Number to string conversion

// let b = 545.6821;
// console.log(typeof(b));
// console.log(b.toString());
// console.log(typeof(b.toString()));

// new Number() - Bad Practice / Object Comparision Issue

// Object Compare - 2 Object => 1 Value Point Out ✅ / Both Object => Refrence Same ✅


// let a = new Number(20);
// let b = 20;
// let c = new Number(20);
// console.log(typeof(a));
// console.log(a);
// console.log(a == c);

// let obj1 = {
//   name:"MBS Coding"
// }

// let obj2 = {
//   name:"MBS Coding"
// }

// console.log(obj1 == obj2);

// Refrence Copy - Object 
// Both Object - Point Out / Refer - 1 Object
// Object - Heavy - Copy Not Created 

// let obj1 = {
//   name:"MBS"
// }

// let obj2 = obj1;

// console.log(obj1 == obj2);

// Vimp Note : 
// Premitive D.T - Data Copy
// Object - Refrence Copy 

// let a = new Number(20);
// let b = new Number(20);
// let b = a;
// console.log(a == b);

// Boolean Conversion

// console.log(Boolean(0));
// console.log(Boolean(10));

// console.log(Boolean(new Number(0)));

// console.log(Boolean(new Number(10)));

// Note : Object - True - Boolean Convert

// console.log(Boolean({}));
// console.log(Boolean({name:"MBS"}));
// console.log(Boolean([]));

// Boolean - null

// console.log(Boolean(null));
// console.log(typeof(null));

// Non Premitive Data Type 
// Refrence - Basis - Compare 

// let obj1 = {
//   name:"MBS"
// }
// let obj2 = obj1;
// console.log(obj1 == obj2);


// Premitive Data Type 
// Data - Basis - Compare 

// let a = 10;
// let b = a;
// console.log(a == b);

// Math Object in JS

// console.log(Math.abs(-4));

// console.log(Math.PI);

// console.log(Math.LN10);

// console.log(Math.SQRT2);

// console.log(Math.sqrt(8));

// console.log(Math.ceil(6.3));

// console.log(Math.floor(6.3));

// 10 ? Power = 20 

// console.log(Math.log10(20));

// 10 ? Power = 100

// console.log(Math.log10(100));

// console.log(Math.max(20,11,3421,12));

// console.log(Math.min(12,13,14,15));

// console.log(Math.random());

// Math.random() => 0 to 1 Number Generate 

// [0 1) - 0 Included 1 Not Included

// Q. Generate => Number
// 0 to 9 => Any random value 

// console.log(Math.random()*10);

// console.log(Math.floor(Math.random()*10));

// Q. Generate Number 
// 1 to 10 

// console.log(Math.floor(Math.random()*10) + 1);

// Q. Generate Number 
// 1 To 6 

// console.log(Math.floor(Math.random()*6)+1);

// General Formula - Random Number Generate 

// Math.floor(Math.random()*totalNumberOfOutcome) + shift

// Q. Generate Number 
// 15 To 25 

// console.log(Math.floor(Math.random()*11)+15);

// Formula 

// Math.floor(Math.random()*(max - min + 1)) + min 

// Q. OTP Generate - 4 Digit ?
// 1000 To 9999 Number Generate ? 

// console.log(Math.floor(Math.random()*(9999-1000+1))+1000);

// Why Math.random() is not secure for OTP ?

// Q. Make Random function => By Your own 
// When we call / When user Call 
// Random() function 
// Random value Generate 
// 0 to 0.99999999999 Value Generate  


