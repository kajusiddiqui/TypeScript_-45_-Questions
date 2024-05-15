"use strict";
// Think of at least five places in the world you’d like to visit.
// Making Array of countries and Print in original order
let countriesToVisit = ["USA", "Canada", "Australia", "SaudiArabia"];
console.log("Original Order", countriesToVisit);
//Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order", [...countriesToVisit].sort());
//Printting array in its original order.
console.log("Array is still in its original order", countriesToVisit);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Reverse Alphabetical Order', [...countriesToVisit].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("Array is still in its original order", countriesToVisit);
//We have change the Original order of Array Reverse
console.log("Reverse Original list Order", countriesToVisit.reverse());
//Reverse Back to Original order of Array
console.log("Back to Original list Order", countriesToVisit.reverse());
//Sort and stored Array in Alphabetical Order
console.log("Stored in Alphabetical Order", countriesToVisit.sort());
//Sort and stored Array in Reverse Alphabetical Order
console.log("Stored in Reverse Alphabetical Order", countriesToVisit.sort().reverse());
