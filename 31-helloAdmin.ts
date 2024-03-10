// Hello Admin: Use of if-else statementan and For in loop with Array
const userName: string[]=['admin','administer','Sabahat','FatimaZehra','Arbish','Faheem','Fayyaz','Shahida'];
function greetUser(): void {
    for( const i in userName){
        if(userName [i].toLowerCase() === 'admin'){
            console.log(` hello admin would you like to see a status report.?`);}
            else{
                console.log(`hello ${userName[i]}, THANK YOU  for logging in again`);
                
            }
            
        }
    }
greetUser();