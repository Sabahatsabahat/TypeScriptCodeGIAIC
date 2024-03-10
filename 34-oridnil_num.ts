// Ordinal Numbers: Use of For of loop and if- else if -else statements

const Numbers: number[]=[1,2,3,4,5,6,7,8,9];
for (const number of Numbers) {
    for(let number of Numbers) {
        let Ordinal:string;
     if(   number ===1){
    let Ordinal
        Ordinal = "st";

    }
    else if( number ===2){
        Ordinal = "rd";

}
    else if( number ===3){
        Ordinal = "nd";

}
else{
    Ordinal = "th";
}}
console.log(`${Numbers}${Ordinal}`);
export{}