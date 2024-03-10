// Exercise  - Stages of Life: Use of if, else if, else conditional statement;
let Age: number = 23;
if (Age < 2 ) {

    // if the person is less than 2 years old, then the person print a message person is baby..

    console.log(`"Person is a baby.`);
    
}
else if(Age >= 2 && Age <4)
{
    console.log(`"Person is todler"`);
    
}
    // if the person is at leasee than 2 years old, but less than 40 then the person print a message person is tolder..

    else if(Age >= 4 && Age < 13)
    {
        console.log(`"Person is a kid"`);
        
    }
    // if the person is at leasee than 40 years old, but less than 60 then the person print a message person is toddler..
    else if(Age >= 13 && Age < 18)
    {
        console.log(`"Person is a teenage"`);
        
    }
    
    
    else if(Age >= 25 && Age < 35)
    {
        console.log(`"Person is a an adult"`);
        
    }
    else{
        console.log( `"Person is an elder`);
        
    }