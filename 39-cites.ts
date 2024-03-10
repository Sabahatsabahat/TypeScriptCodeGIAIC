





// call the function
function decribeCity ( city: string='large', country: string = ' Unknown country' )  {
    console.log(`${city} is in ${country}`);
    return
     `size: ${city}, message: '${country}'`;

}

decribeCity('Karachi', 'Pakistan');
decribeCity(' new york', ' United States');
decribeCity(' south africa', ' Germany');

