let price = 20;
let courseName = "JavaScript Fundamentals";
const age = 20;

// age = age + 1; // This line will throw an error because 'age' is a constant and cannot be reassigned.   
price = price + 10; // This line is valid because 'price' is declared with 'let' and can be reassigned. 

console.log(`Price: ${price}, Age: ${age}`);

// console.log("Hello, world!");
// console.log("My name is Hashir and I am learning JavaScript.");


console.log(typeof "Hello");     // string
console.log(typeof 42);          // number
console.log(typeof true);        // boolean

let notSetYet;
console.log(typeof notSetYet);   // undefined
console.log(notSetYet);          // undefined


console.log("5" + 3);     // "53"  (the + joins text)
console.log("5" - 3);     // 2     (the - forces a number)
console.log(Number("42")); // 42   (convert text to a number)
console.log(Number("abc")); // NaN  (Not a Number)
console.log(0.1 + 0.2);   // 0.30000000000000004



let count = 5;
count++;        // same as count = count + 1
count += 10;    // same as count = count + 10
console.log(count);      // 16
console.log(10 % 3);     // 1
console.log(8 % 2 === 0); // true (8 is even), strict equality operator (===) checks both value and type
// ascii value example


console.log(5 > 3);       // true
console.log(5 <= 3);      // false
console.log(5 === 5);      // true
console.log(5 === "5");    // false (different types)
console.log(5 == "5");     // true  (avoid ==)
console.log(5 !== 4);      // true neither data type nor value is equal





const name = "  Syed Hashir Ali  ";

console.log(name.length);          // 14 (spaces count)
console.log(name.trim());          // "Syed Hashir Ali" // removes leading and trailing spaces
console.log(name.trim().toUpperCase()); // "SYED HASHIR ALI" // converts to uppercase
console.log(name.trim().toLowerCase()); // "syed hashir ali" // converts to lowercase
console.log(name.includes("Hashir")); // true // checks if the string contains "Hashir" (case-sensitive)





console.log(name.trim().split(" ")); // [ 'Syed', 'Hashir', 'Ali' ] // splits the string into an array of words

console.log("Hello".charAt(0));     // "H" // gets the character at index 0

console.log("Hello".slice(1, 4));   // "ell" // extracts a section of the string from index 1 to 4 (not including 4)

console.log("a-b-c".replace("-", "+")); // "a+b-c" // replaces the first occurrence of "-" with "+"






// LOGIC BUILDING

let a = 3;
let b = 5;

a = a + b; // 8
b = a - b; // 5
a = a - b // 3

console.log(`a: ${a}, b: ${b}`); // a: 3, b: 5




// check for pelindrome 

// CIVIC

const word = prompt('enter word');

for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        console.log("Not a palindrome");
    }
}



// GRADE CALCULATOR

const marks = 85;

if (90 < marks && marks <= 100) {
  console.log("A+");
} else if (85 < marks && marks <= 89.9) {
  console.log("A");
} else if (80 < marks && marks <= 84.9) {
  console.log("A-");
} else if (75 < marks && marks <= 79.9) {
  console.log("B+");
} else if (70 < marks && marks <= 74.9) {
  console.log("B+");
} else if (65 < marks && marks <= 69.9) {
  console.log("B-");
} else if (60 < marks && marks <= 64.9) {
  console.log("C+");
} else {
  console.log("Fail");
}



// LOOP


//wrong why?

for (let age = 30; age <= 100; age += 10) 

if (age <= 40) {
  console.log("C");} 
else  if (40 < age && age < 80) {
    console.log("C");}
else  if (80 < age && age < 90) {
    console.log("B");}
else if (90 < age && age < 100) {
    console.log("A") }

//Correct

for (let age = 30; age <= 100; age += 10) {
  if (age <= 40) console.log("C");
  else if (age < 80) console.log("C");
  else if (age < 90) console.log("B");
  else console.log("A"); }





// FUNCTIONS

function grade(marks) {
  if (marks >= 90) {
    return "A+";
  } else if (marks >= 85) {
    return "A";
  } else if (marks >= 80) {
    return "A-";
  } else if (marks >= 75) {
    return "B+";
  } else if (marks >= 70) {
    return "B";
  } else if (marks >= 65) {
    return "B-";
  } else if (marks >= 60) {
    return "C+";
  } else {
    return "Fail";
  }
}

console.log(grade(85));
console.log(grade(95));


// ARRAYS