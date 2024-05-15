"use strict";
/*If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner.*/
let invitationList = ['Ali', 'Bilal', 'Adil', 'Kanwal'];
//using .forEach method , \n for line spacing
// invitationList.forEach(invitation=>console.log(`Dear ${invitation}, I would Like to invite you for a Dinner, for celebrating my promotion, please join me on this Friday.`))
/*
Ex 15:
Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
*/
//Adil is not coming for Dinner
let cantcome = "Adil";
//console.log(`\n ${cantcome} is not comming for Dinner.\n `);
// New Guest is Tooba, so re printing the Invitation List 
let newGuest = "Tooba";
invitationList[invitationList.indexOf(cantcome)] = newGuest;
//invitationList.forEach(invitation=>console.log(`Dear ${invitation}, I would Like to invite you for a Dinner, for celebrating my promotion, please join me on this Friday.`))
// Ex 16
//You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
console.log(`Hey! Good News, I found a bigger dinner table for Dinner.`);
//Adding Starting Name
invitationList.unshift("Aamna");
//Adding Last Name
invitationList.push('AbdurRehman');
//Adding Middle Name
let midName = Math.floor(invitationList.length / 2);
invitationList.splice(midName, 0, 'Fatima');
// invitationList.forEach(invitation=>console.log(`Dear ${invitation}, I would Like to invite you for a Dinner, for celebrating my promotion, please join me on this Friday.`))
//Ex 19: Working with one of the programs from Exercises 14 through 18, print a message indicating 
//the number of people you are inviting to dinner.
let numberOfGuest = invitationList.length;
console.log(`"Number of People invited to Dinner" ${numberOfGuest} `);
