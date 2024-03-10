// No Users: Use of if and if-else statements and For of loop with Array


// Empty array use case
const emptyUserName:string[] =[];

// Non empty array use case
let nonEmptyUserName:string[] =[" sabahat","Arbish","FatimaZehra","Faheem"];

// Function use case
function greetUsers(userName:string[]):void 
{
    if (userName.length === 0) {
        console.log(` we need to find some users`);
        return;
    }
}
for ( const userName of emptyUserName){
if(
    userName.toLowerCase() === 'sabahat'
){
    console.log(`Hello Sabaahat would you like to  see a status report`);
}

else{
    console.log(`hello ${userName}, Thank you! for logging in`);
    
}
}
console.log(`For non Empty user name: \n`);
greetUsers(emptyUserName);
export{}
