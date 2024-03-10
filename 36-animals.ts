


//Animals: Use of For of loop, and if-else if conditional statement

// List of animal with a common characteristics..
let animalNames:string[] = ['Lions','Leopard','Panther'];

// Printing the name of the  each animal with the for loop 

console.log("list of animal names");

for (const animal of animalNames) {
    console.log(animal);
    
}
// print a statement about  each animal.

console.log("list of animal names");
    for (const animal of animalNames) 
      if (animal === 'leopard' ){
        console.log(` A ${animal}is great pet`);
        }  else if (animal === 'lions'){
            console.log(` A ${animalNames} is a waild animal `);}
            else if (animal === 'Panther')
    console.log( ` A ${animalNames} is my favorite animal`);
    

