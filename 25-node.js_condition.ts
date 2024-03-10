//equality and inequality. (Test 00);

                         //EQUALITY TEST START//

console.log("equality test with string:", "Markhor" === "Markhor");

//equality test and inequality.(Test 01);

console.log("inequality test with string:", ("Markhor" as string) !== "turkey");


// using lowercase function;
console.log(`"lowercase function test" `, "HELLOW".toLocaleLowerCase() === "hellow");

// Numerical  test involving equality and inequality,

console.log("equality test with number:", 123 === 123);

// Numerical  test involving  inequality,

console.log("inequality test with number:", (234 as number)!== 456);


//greater than test

console.log("greater than test with number:",123 < 456);
//greater  less than,

console.log("greater than test with number:",456 > 123);


// greater than  or equal to

console.log("greater than or equal to test with number:",123 <= 123);



// and less than equal to.
console.log("Less than or equal to test with number:",222 <= 1123);

                       //EQUALITY TEST END //

   //Test using "and" and  "or" operator  
   
   // test "and" operator
   console.log("And operator test:", 5===5 && 10 >5);

   // test "or" operator
   console.log("Or operator test:", 5===5 || false);

   //test whether an item is an array
const countires: string[]= ["USA", "UAE","UDE"];
console.log(`Test "UAE" in the array: `, countires.includes("UAE"));

   //test whether an item is not  an array

console.log(`Testing "DUBAI" is not an array":`, !countires.includes("DUBAI"));




                   

