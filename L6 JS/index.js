// String 

// let str0 = "Course";
// let str1 = "MBS";
// let str2 = 'MBS Coding';
// let year = 2026;
// let str3 = `MBS Coding JavaScript ${str0} ${year}`;
// console.log(str1, str2, str3);
// console.log(str3);

// Length 

// let str = `Namskar MBS Coding`;
// console.log(str.length);
// console.log(str[2]);

// String Immutable 

// let str = "MBS Coding";
// str[2] = "A";
// console.log(str);

// Uppercase & Lowercase

// let str = "mbs coding";
// console.log(str.toUpperCase());

// Immutable String Proof

// let str = "mbs coding";
// console.log(str);
// str.toUpperCase();
// console.log(str);

// let str = "mbs coding";
// let a = str.toUpperCase();
// console.log(a);

// let str = "SACHIN TENDULKAR";
// let b = str.toLowerCase();
// console.log(b);

// Finding Substring 

// let str = "Namskar MBS Coding";
// console.log(str.indexOf('MBS'));
// console.log(str.indexOf('kar'));
// console.log(str.indexOf('ig'));

// Real World : Word Find Out ?
// complete string => Convert => capital letters / uppercase 
// substring => capital convert 
// last => searching => indexof('')

// indexOf() - first index

// let str = `MBS Coding MBS Coding`;

// console.log(str.indexOf('MBS'));
// console.log(str.indexOf('ng'));
// console.log(str.lastIndexOf('MBS'));
// console.log(str.lastIndexOf('ng'));

// Includes => true / false

// let str = `Namskar MBS Coding`;
// console.log(str.includes('Cod'));

// Slice

// let str = `MBS Coding Official`;
// console.log(str.length);
// console.log(str.slice(2,10));
// console.log(str.slice(2));
// console.log(str.slice(-8));
// console.log(str.slice(-8,-4))

// Substring Method
// Similar like slice 
// Only -ve argument ❌

// let str = `MBS Coding`;
// console.log(str.substring(0,9));

// concatenation 

// let a = "MBS";
// let b = "Coding";
// let c = a + " Real " + b;
// console.log(c);

// Left to right

// console.log(24 + "MBS");

// console.log(typeof(24 + "MBS"));

// console.log(24 + "MBS" + 10);

// console.log(typeof(24 + 10 + "MBS"));

// Replace Substring 

// let str = `MBS Coding MBS Coding`;
// console.log(str.replace("Coding","Educational"));
// console.log(str.replaceAll("Coding","Educational"));

// Immutable Proof - String

// let str = `MBS Coding MBS Coding`;
// str.replaceAll("Coding","Edcuational");
// console.log(str);

// trim 
// start & end space - trim
// Backend => Vimp Use 
// Whenever string => trim operation ✅

// let str = ` MBS Coding `;
// console.log(str);
// console.log(str.trim());

// Split 

// let str = "MBS,Raju,Shyam,BabuBhaiya";
// console.log(str.split(","));

// let str1 = "MBS Coding Official";
// console.log(str1.split(" "));

// Date Object

// let now = new Date();
// console.log(now);

// UTC - Universal Time Coordinate 
// Cricket Match 
// UTC + 5:30

// Current Date & Time

// let now = new Date();
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());

// Local Time

// let now = new Date();
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getHours());
// console.log(now.getSeconds());

// Crete your own date and time 
// Date - Inconsistency 
// Month : Start => 0 = Jan
// Days : Start => 1 = Mon 
// Most Website => JS Used 
// Instant Change => Code Error / Bug / Big System / Business Crash 
// Format :
// Year month date hour minute seconds millisecond 

// let now = new Date(2025,8,20,8,25,16,125);
// console.log(now);
// console.log(now.toString());

// Date - MS
// 1S = 1000MS

// let now = Date.now();
// console.log(now);

// MS To Current Date & Time

// let now = Date.now();
// let dates = new Date(1764754317500);
// console.log(dates);
// console.log(dates.toString());
// console.log(now);

// Millisecond Time Cound Start ? 
// Why This Format ?
// UTC Format Famous ?
// UTC - Timestamp 
// Timestamp - Everywhere Same 

// let now = Date.now();
// let dates = new Date(0);
// console.log(dates.toString());

// Timestamp : 

// let now = Date.now();
// let dates = new Date(now);
// console.log(dates);

// -Ve MS
// -12312312
// 1764757935882 - Timestamp 

let now = Date.now();
// let dates = new Date(-12312312);
let dates = new Date(1764757935882);
console.log(dates);
console.log(now);