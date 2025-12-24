// Array 

// 5 Students Marks - Print 

// let marks1 = 100;

// let marks2 = 90;

// let marks3 = 80;

// let marks4 = 70;

// let marks5 = 60;

// let marks = [100,90,80,70,60];
// console.log(marks);
// console.log(marks.length);

// Other Pro Lang - Array => Same Type of Data Present 
// JS - Hetrogenous Data => Diff Diff Type of Data Present

// let arr = [100,30,"MBS",true];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(typeof(arr));
// arr[0] = 90;
// arr[1] = 40;
// arr[2] = "MBS Coding";
// arr[3] = false;
// console.log(arr);

// Push Operation : Insert Element At the End

// let arr = [10,30,"MBS",true];
// arr.push(90);
// arr.push("MBS Coding");
// console.log(arr);

// Pop Operation : Delete Element from End

// arr.pop();
// arr.pop();
// console.log(arr);

// 0Th Index Element Add - Unshift Operation

// let arr = [10,20,"MBS",true];
// arr.unshift(100);
// arr.unshift(200);
// console.log(arr);
 
// 0Th Index Element Delete - Shift Operation

// arr.shift();
// arr.shift();
// console.log(arr);

// Iterating with for loop 
// Iterating - Print Every Element 1 By 1 

// let arr = [10,20,30,40,50];
// for(let i = 0;i < arr.length;i++){
//   console.log(arr[i]);
// }

// Iterating with for of loop

// let arr = [110,120,130,140,150];
// for(let num of arr){
//   console.log(num);
// }

// Array => Object 
// Array : Copy by Reference 
// 2 Diff Array : Copy => Same Refrenece

// let arr = [10,20,30,40,50];
// let arr1 = arr;
// arr1.push(30);
// console.log(arr1);
// console.log(arr);

// Const with Array

// const a = 10;
// a = 20;
// console.log(a);

// const arr = [10,20,30,40,50];
// arr = [80,90,100];
// console.log(arr);

// const arr = [10,20,30,40,50];
// arr[2] = 60;
// console.log(arr);

// Slicing Array 

// const arr = [10,20,30,40,50];
// const arr2 = arr.slice(2,4);
// console.log(arr);
// console.log(arr2);
// console.log(arr.slice(0,3));

// Splice : Original Array - Trim / Cut => Some Part 

// const arr = [10,20,30,40,50];
// console.log(arr.splice(1,3));
// const arr2 = arr.splice(1,3);
// console.log(arr2);
// console.log(arr);
// const arr3 = arr.splice(1,3,"MBS",24);
// console.log(arr);
// console.log(arr3);

// Merging Array : 2 Array Merge

// 1. Push 

// let arr1 = [10,20,30,40,50];
// let arr2 = ["MBS",11,true];
// let arr3 = [90,4,false];
// arr1.push(arr2,arr3);
// console.log(arr1);

// 2. Concat

// let arr1 = [10,20,30,40,50];
// let arr2 = ["MBS",11,true];
// let arr3 = [90,4,false];
// arr1.concat(arr2,arr3);
// const arr4 = arr1.concat(arr2,arr3);
// console.log(arr4);

// 3. Spread Operator 

// let arr1 = [10,20,30,40,50];
// let arr2 = ["MBS",11,true];
// let arr3 = [90,4,false];
// let arr4 = [arr1,arr2,arr3];
// console.log(arr4);

// let arr1 = [10,20,30,40,50];
// let arr2 = ["MBS",11,true];
// let arr3 = [90,4,false];

// let arr4 = [...arr1,...arr2,...arr3];
// console.log(arr4);

// Converting Array to String 

// toString()

// const names = ["Raju","Shyam","Babu Bhaiya"];
// console.log(names.toString());
// console.log(typeof(names.toString()));

// Join()

// const names = ["Raju","Shyam","Babu Bhaiya"];
// console.log(names.join());
// console.log(names.join("-"));

// IndexOf()

// let arr = [10,20,30,40,50,10];
// console.log(arr.indexOf(10));

// lastIndexOf()

// let arr = [10,20,30,40,50,10];
// console.log(arr.lastIndexOf(10));

// includes()

// let arr = [10,20,30,40,50,10];
// console.log(arr.includes(60));


// Sorting Array of String 
// Dictionary + ASCII Table

// const names = ["Akshay","Rahul","Babu Bhaiya","MBS","Coding"];
// names.sort();
// console.log(names);

// ASCII Table 

// A = 65
// a = 97


// const names = ["akshay","Rahul","Babu Bhaiya","MBS","Coding"];
// names.sort();
// console.log(names);

// Reversing Array Order : 
// Ascending 
// Descending 

// const names = ["Akshay","Rahul","Babu Bhaiya","MBS","Coding"];
// names.sort();
// names.reverse();
// console.log(names);

// Default Sorting - Fails for Numbers 

// const a = [101,90,80,32,91];
// a.sort();
// console.log(a);

// const arr = [10,"Rahul","MBS",true];
// arr.sort();
// console.log(arr);

// Custom Sorting : Ascending Order 

// const arr = [10,40,31,71,5,11];
// arr.sort((a,b) => a - b);
// console.log(arr);

// Custom Sorting : Descending Order

// const arr = [10,40,31,71,5,11];
// arr.sort((a,b) => a - b);
// arr.sort((a,b) => b - a);
// console.log(arr);

// Flattering Nested Array 
// Flat - [1,2,3,4] => Only Element

// 2D Array 

// const arr = [10,30,50,[40,90,11],80];
// console.log(arr);
// console.log(arr[3]);
// console.log(arr[3][0]);
// console.log(arr[3][1]);
// console.log(arr[3][2]);

// 3D Array 

// const arr = [10,30,50,[40,90,[60,19,99],11],80];
// console.log(arr[3][2][1]);

// Flattering Nested Array - Infinite Level

// const arr = [10,30,50,[40,90,[60,19,99],11],80];
// const a = arr.flat(2);
// console.log(a);

// const arr = [10,30,50,[40,90,[60,19,99],11],80];
// const a = arr.flat(Infinity);
// console.log(a);

// Array Behave => Objects 

const a = [10,309,"Rahul",9.3,true];
console.log(a["0"]);
console.log(a["1"]);
a.name = "MBS";
console.log(a);
console.log(typeof(a));
