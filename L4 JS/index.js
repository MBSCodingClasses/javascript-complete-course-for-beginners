// 1. Arithmetic Operators 

// + - * / % **

// console.log(5+2);
// console.log(5-2);
// console.log(5*3);
// console.log(11/2);

// console.log(11 % 2);

// console.log(10 ** 3 );

// 2. Assignment Operator 

// let x = 20;
// let y = 10;
// x = x + y;
// x = x - y;
// x = x * y;
// x = x / y;
// x = x % y;
// x = x ** y;
// console.log(x);

// Shortcut - Assignment Operators

// let x = 20;
// let y = 10;
// x+=y;
// x-=y;
// x*=y;
// x/=y;
// x%=y;
// x**=y;
// console.log(x);

// Comparision Operator

// let x = 20;
// let y = 20;

// console.log(x > y);
// console.log(x < y);
// console.log(x>=y);
// console.log(x<=y);

// console.log(x == y);

// console.log(x === y);

// Type Conversion : String to Number 

// let z = "10";
// console.log(typeof(z));
// console.log(z);
// let a = Number(z);
// console.log(typeof(a));
// console.log(a);

// number and string compare - string converts to number 

// let x = 20;
// let y = "20";
// console.log(x == y);

// === - Strict Checking => Value + Data Type
//  Before Comparision => Both side type must be equal ✅
// Step 1 - Type Check => Both - Same Type => Condition
// Step 2 - Comparision Start 

// let x = 20;
// let y = "20";
// console.log(x === y);

// NaN - Not a Number => Data Type - Number 

// let a = "121ac";
// let b = Number(a);
// console.log(typeof(b));
// console.log(b);
// console.log(0/0);

// Number to String Conversion

// let a = 10;
// let b = String(a);
// console.log(b);
// console.log(typeof(b));

// Boolean to Number Conversion

// console.log(true);
// console.log(Number(true));
// console.log(false);
// console.log(Number(false));

// Null to Number Conversion 

// console.log(Number(null));

// Undefined to Number Conversion

// console.log(Number(undefined));

// Boolean to String Conversion

// console.log(true);
// console.log(typeof(true));
// console.log(false);
// console.log(typeof(false));
// console.log(String(true));
// console.log(typeof(String(true)));
// console.log(String(false));
// console.log(typeof(String(false)));

// String to undefined

// console.log(undefined);
// console.log(typeof(undefined));
// console.log(String(undefined));
// console.log(typeof(String(undefined)));

// String to null

// console.log(null);
// console.log(typeof(null));
// console.log(String(null));
// console.log(typeof(String(null)));

// Number to Boolean Conversion

// console.log(10);
// console.log(typeof(10));
// console.log(Boolean(10));
// console.log(typeof(Boolean(10)));
// console.log(Boolean(-10));
// console.log(typeof(Boolean(-10)));
// console.log(Boolean(0));
// console.log(typeof(Boolean(0)));

// Boolean to String Conversion 

// console.log("MBS Coding");
// console.log(typeof("MBS Coding"));
// console.log(Boolean("MBS Coding"));
// console.log(typeof(Boolean("MBS Coding")));
// console.log(Boolean(""));
// console.log(typeof(Boolean("")));

// Undefined to Boolean 

// console.log(Boolean(undefined));

// Null to Boolean 

// console.log(Boolean(null));

// Floating Point Precision 


// let a = 0.1;
// let b = 0.2;
// let c = a + b;
// console.log(c);
// console.log(c == 0.3);

// Rule 1 : null is loosely equal to undefined only 

// console.log(null == undefined);
// console.log(null === undefined);
// console.log(null == 0);
// console.log(null == "");
// console.log(null == true);
// console.log(null == false);


// Rule 2 : Operator >, <, >=, <=  Type Conversion ✅ (null convert - number)
// null - 0


// console.log(null > 0);
// console.log(null <= 0);
// console.log(null >= 0);
// console.log(null < 0);

// Rule 3 : Operator >, <, >=, <=  Type Conversion ✅ (undefined convert - NaN)

// console.log(null >= undefined);
// console.log(undefined >= 0);

// String Comparision => ASCII Value


// ASCII Value of R = 82 
// ASCII Value of M = 77
// ASCII Value of m = 109 

// console.log("Rahul" > "Mukund");
// console.log("Rahul" > "mukund");

// console.log(10 > "10");
// console.log(10 >= "10");

// console.log(10 >= true);
// console.log(10 <= true);

// console.log(null >= "");
// console.log(null > "");

// D.T  Compare D.T 
// Both Same Ground 
// Number Convert 
// Same D.T - ✅

// console.log(NaN == NaN);


// Loops => 1 Work => Multiple Time

// For Loop 

// Print 0 to 9

// Post increment i++, Post decrement i--

// for(let i = 0; i < 10; i++){
// console.log(i);
// }

// While Loop

// let i = 0;

// while(i < 10){
//   console.log(i);
//   i++;
// }


// Do While Loop

// let i = 0;

// do{
//   console.log(i);
//   i++;
// }while(i < 10);

// for of loop - value return

// let str = "MBS Coding Official";
// for(let ch of str){
//   console.log(ch);
// }

// for in loop - index return

// let str = "MBS Coding";
// for(let ch in str){
//   console.log(ch);
// }


// If else condition 

// let age = 16;

// if(age>=18){
//   console.log("Eligible for vote");
// }
// else{
//   console.log("Not Eligible for vote");
// }

// Else If for Multiple Condition 

// Kid Young & Old

// let age = 90;

// if(age < 18){
//   console.log("Kid");
// }
// else if(age >= 60){
//   console.log("Old");
// }
// else{
//   console.log("Young");
// }

// Switch Case Statement 

// let color = "orange";

// switch(color){
//   case "red":
//     console.log("Stop!");
//     break;
//     case "yellow":
//       console.log("Warning");
//       break;
//       case "green":
//         console.log("go");
//         break;
//         case "orange":
//           console.log("orange");
//           break;
//     default :
//     console.log("Invalid Color");
// }


// Ternary Conditional Statement 

// let age = 90;
// let result = age >= 18 ? "You can drive" : "You can't drive";
// console.log(result);


// Logical Operator 

// && , ||

// Logical And 

// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

// Logical Or 

// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

// let a = "Sachin";
// let b = "Tendulkar";
// let c = a && b;
// console.log(c);

// let a = "";
// let b = "MBSCoding";
// let c = a && b;
// console.log(c);

//&& : 1St Value False => Return 1St Value
// && : 1St Value True => Return 2Nd Value

// let a = 0;
// let b = 20;
// console.log(a && b);

// Logical Or || 

// || : 1St Value - True Return 1St Value
// || : 1St Value - False Return 2nd Value

// let a = 20;
// let b = 30;
// console.log(a || b);

// let a = 0;
// let b = 20;
// console.log(a || b);

// != 

// console.log(4 != 5);
// console.log(5 != 5);