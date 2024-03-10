//Seeing the World: Think of at least five places in the world you’d like to visit.






// import { log } from 'console';
// // exersice 16  soluton 



// // step one informiang people that you found a bigger dinner table;
// let guestList : Array<string> =[" sir Syed Ahmed Khan","Muhaammad Ali jinha ","Allama Iqbal"];


// // step 1- print the person who can't come
// let guestWhoCantMakeIt: string= " Allama Iqbal"
// console.log(`${guestWhoCantMakeIt}, can't make it to dinner`);

// // Step 2. Replace the name of guest who can't make it;

// let newGuest: string= " SAd hashmani"
// let indexofguestWhoCantMakeIt: number= guestList.indexOf(guestWhoCantMakeIt)
 
// // console.log(guestWhoCantMakeIt);

// if (indexofguestWhoCantMakeIt !== 2) {
//     guestList[indexofguestWhoCantMakeIt]= newGuest
// }
// // console.log(guestList[2]);

// // print a second set of invatation 

// console.log(` second set of invataion`);
// guestList.forEach(
//     (
//         guest: string )=>
//     {
//         console.log(`Dear ${guest}, You are invited to diner`);
        
//     }


// );//Exercise 16 - More Guests: You just found a bigger dinner. Three more guests to invite for dinner.




// // step one infroming people that you found a bigger dinner table.,

// for(let guest of guestList){
// console.log(`hellow ${guest}, we found a bigger dinner table.`);

// }
// //step 2. Add a new guest begningn of arry 
// let newGuestBegning: string= " Sonu Sharma" 


// guestList.unshift(newGuestBegning)
// console.log(guestList);

// // add one guest  to the middle of array 

// let guestListMiddle:string=" Sir Qasim Ali Shah"
// let middleIndex: number= Math.floor(guestList.length/2)
// guestList.splice(middleIndex, 0, guestListMiddle)
// //  

// // 4 step use append to new guest to the end of your list 
// let newListEnd: string= " Shah wali Ullah "
// guestList.push(newListEnd)
// // console.log(guestList);
// // fanil step print a new set of invataton message ;

// console.log(` new set of  invatation message `);
// for (const guest of guestList) {
//     console.log(`Dear ${ guest}, You are inviting to the dinner`);
    
// }

// //Exercise...17
// step on e
let guestList: Array<string>=[
    "FatimaZehra","Arbish","Sabhat", "Faheem","Fayyaz","Shahida"
]
// message about to inviting only two people
console.log(` i can  invite only two people for dinner`);

//  step two remove guest from  the list until only  two name ramin:

while(guestList.length > 2){
let removeGuest = guestList.shift()
console.log(`Sorry ${removeGuest},I can't invite to diinner`)}
// part 3. print a message to each of the two people still  on your, list letting them know they're still invited;

for(let guest of guestList){
console.log(`Hellow, ${guest}You are still invited to dinner `);

}

// 4 step remove the last two names from your list make sure you actully have empty list end the end of your program.
guestList.pop()
guestList.pop()
// print Empty string 
// console.log(`Guest list after dinner: ${guestList}`);
console.log(`Guest list after dinner:`,guestList);
