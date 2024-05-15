/*If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner.*/

 let invitationList = ['Ali','Bilal','Adil','Kanwal'];

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
invitationList [invitationList.indexOf(cantcome)] = newGuest;

//invitationList.forEach(invitation=>console.log(`Dear ${invitation}, I would Like to invite you for a Dinner, for celebrating my promotion, please join me on this Friday.`))

// Ex 16

//You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//console.log(`Hey! Good News, I found a bigger dinner table for Dinner.`);
//Adding Starting Name
invitationList.unshift("Aamna");
//Adding Last Name
invitationList.push('AbdurRehman');
//Adding Middle Name
let midName : number = Math.floor(invitationList.length /2)
invitationList.splice(midName, 0,'Fatima')

//invitationList.forEach(invitation=>console.log(`Dear ${invitation}, I would Like to invite you for a Dinner, for celebrating my promotion, please join me on this Friday.`))

// Ex 17

//You just found out that your new dinner table won’t arrive in time for the dinner,
//and you have space for only two guests.


//Only two guest invited for dinner
console.log(' My new dinner table won’t arrive in time for the dinner, so I can invite only two people for dinner.');

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your
// list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.


// using while loop to remove invitation list from the array until two names Remaining

while(invitationList.length > 2){
    let removeGuest = invitationList.pop();
    console.log(`Sorry ${removeGuest}, I cant invite you to Dinner,`);
}

//Print a message to each of the two people still on your list, letting them know they’re still invited.
//sending invitation to the last two Guests
console.log('Invitation to the Last two Guest');
invitationList.forEach(lastTwo=> console.log(`I am Glad to inform you that ${lastTwo} you are still invited to the Dinner`))

invitationList.pop();
invitationList.pop();

console.log('Emptylist', invitationList);