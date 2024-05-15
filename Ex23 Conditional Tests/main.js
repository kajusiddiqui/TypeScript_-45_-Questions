"use strict";
/*
Write a series of conditional tests.Print a statement describing each test and your prediction
for the results of each test.
*/
//Test 1
let Book = "Java Script";
let Book2 = "Python";
console.log("Test 1: This Book is  == Java Script", "I predict True.");
console.log(Book == "Java Script"); //true
//Test 2
console.log("\n Test 2: This Book2 is == Python", "I predict True.");
console.log(Book2 == "Python"); //true
//Test 3
console.log("\n Test 3: This Book is  == Java Script", "I predict false.");
console.log(Book2 == "Java Script"); //false 
//Test 4
console.log("\n Test 4: This Book2 is != Python", "I predict true.");
console.log(Book != "Python"); //true
//Test 5
console.log("\n Test 5: This Book is != Java Script", "I predict false.");
console.log(Book != "Java Script"); //false
let x = 10;
let y = 5;
//Test 6
console.log("\n Test 6: x is equal to 10", "I predict true.");
console.log(x == 10); //True
//Test 7
console.log("\n Test 7: y is equal to 5", "I predict true.");
console.log(y == 5); //True
//Test 8
console.log("\n Test 8: y is greater than  x", "I predict false.");
console.log(y > x); //False
//Test 9
console.log("\n Test 9: y is equal to x", "I predict false.");
console.log(y == x); //false
//Test 10
console.log("\n Test 10: x is less than to 5", "I predict false.");
console.log(x < 5); //false 
