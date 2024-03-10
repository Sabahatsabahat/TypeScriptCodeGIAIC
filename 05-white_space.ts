// striping name: store a person name inclide some whitespace characters at the beginning and end of the name. Make sure you use each characters combination , "\t" and "\n", at least once. print the name once, so the whitespace around the name is displayed. then print th ename after striping the white space.





let LengendName: string =" \t\n      Quaid e Azam     \n\t      ";

console.log("name with whitespace",LengendName);

// .trim ( javascript method to remove white spaces)

let stripedname: string = LengendName.trim()
console.log("stripedname remove space",stripedname)


