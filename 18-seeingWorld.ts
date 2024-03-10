// Exercise 18 -Seeing the World: Think of at least five places in the world you’d like to visit.
// Step 1. Create one  an Array to store travel distanation:

import { AsyncLocalStorage } from "async_hooks";
import { log } from "util";

let travelDistination: string[]=[" Baku","Maldeves"," Madiana Munawra","Turky"," Azarbaijan","USA"];
// Print the array in the original order

console.log(`"Original Order`);

console.log(travelDistination);
// Step 2. print your are  in alphabetical order withOut modifiiy the actul listL:


console.log(" \n Alphabatical order without modifiy  the actul list.");
console.log([...travelDistination].sort());

// step 4. show your that your array is still in its original order by printing it again.
console.log(" show your array is still in its original order by printing it again ");
console.log(travelDistination);


//Step 5. Print your Array in reverse Alphabetical order without changing the order of the original list

console.log(`" Reverse alphabetical order without changing the order of the original list `);
console.log([...travelDistination].sort().reverse());


// Step 6. Show that your Array  is still in the originl order by printing it again.

console.log(`"Show Array is still in the original order by printing it again"`);


console.log(travelDistination);

// Step 7 Reverse the order of your list. print the Array to show that its order has changed.

console.log(" reverse the order of your list print the array to show that its order has changed");
travelDistination.reverse();
console.log(travelDistination);
// Step 8.Reverse the order of your list again print the list to show its back to its original 
console.log(" Reverse the order of your list again print the list to show its back its origal");
travelDistination.reverse();

console.log(travelDistination);

//Step 9. Sort your Array so its sorted in alphabetical order. print the array to show that its order has been changed;
console.log(`Sort your Array so its sorted in alphabetical order. print the array to show that its order has been changed;`);
travelDistination.sort()
console.log(travelDistination);

// Step 10 sort to change your array so its stored  in reveres alphabetical order. print the list to show that its order has changed 

console.log("sort to change your array so its stored in revaers alphabetical order print the list to show that its order has changed");

travelDistination.sort().reverse()
console.log(travelDistination);






