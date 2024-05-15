/*
Think of your favorite mode of transportation, such as a motorcycle or a car, 
and make a list that stores several examples. 
Use your list to print a series of statements about these items, 
such as “I would like to own a Honda motorcycle.”
*/

let myVehicle : string[] = ['Suzuki Hayabusa','Kawasaki Ninja H2R','Lamborghini Huracan','Bugatti Chiron','Tesla Roadster','Ferrari SF90 XX Spider'];

myVehicle.map(vehicle=> console.log(`“I would like to own a ${vehicle}.”`));      //Here I used a .map method 

