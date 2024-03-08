/* Ex11

 Store the names of a few of your friends in a array called names. Print each person’s name
by accessing each element in the list, one at a time.

*/

//let names = ["Ali", "Bilal","Kanwal","Kazim"];   //stored Names as Array
//names.forEach(friendsname => console.log(friendsname));





/*Ex12 : Start with the array you used in Exercise 11, but instead of just printing 
each person’s name, print a message to them. The text of each message should be 
the same,but each message should be personalized with the person’s name.*/


let names = ["Ali","Bilal","Kanwal","Kazim"];

names.forEach(friendsname => console.log(` ${friendsname}, let's go for Dinner.`));


