


// call the function
function make_Shirt  ( size: string='large', message: string = ' i love typescript' )  {
    console.log(`Creating a ${size} shirt with the message: ${message}`);
    return
     `size: ${size}, message: '${message}'`;

}

make_Shirt()
make_Shirt('Medium')
make_Shirt('small','I love python');
