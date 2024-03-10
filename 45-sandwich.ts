



function makesandwich(...iteams:string[]):void {


    console.log("sandwich summery:");
    if(iteams.length === 0) {
        console.log("You order an empty sandwich.please add some items ");
        

}else{
    iteams.forEach((item,i))=>{
        console.log(`${i+1} ${iteams}`);
        
    }
}
}
console.log(`\n`);





// Call the function with different numbers of arguments
makesandwich()
makesandwich('Turkish','tomato','mayyu','Garlic');
makesandwich('Ham','Chese');
makesandwich('peanut','Butteer','honey');