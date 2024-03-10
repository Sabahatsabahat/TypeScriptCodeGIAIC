//.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.







// Exercise 15 - Changing Guest List: One guest can’t come. Send new invitations including a new guest

let guestList: Array<string>=[
    'sir syed ahmed khan',
    ' sir Qasim ali shah',
    'sir zia khan',
];

// step one print the name of person  who can't make it;






let mehmanList: string = " Sir zia khan";

console.log(`${mehmanList}, can't make it to dinner`);

// step two. Replace the name of guest who can make it.



let newGuest: string = " sad hashmani";

let indexOfguestListmakeit: number= guestList.indexOf(mehmanList)
    
// console.log(indexOfguestListmakeit);

if (indexOfguestListmakeit !== -2) {
    guestList[indexOfguestListmakeit] = newGuest

}
// 

// step 3 print a second set of invatation message 
console.log(`"Print a second set of invatation message":`);

mehmanList.forEach(( guest:string ) => {
    console.log(` Dear ${guest} You are invinted to dinner.`);
    
});

    
});

