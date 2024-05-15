"use strict";
/*Name Cases: Store a person’s name in a variable,
 and then print that person’s name in lowercase, uppercase,
 and titlecase.
*/
let personName = "kazim siddiqui";
console.log(personName.toLowerCase()); //In Lower Case
console.log(personName.toUpperCase()); //In Upper Case
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase())); //In Title Case 
