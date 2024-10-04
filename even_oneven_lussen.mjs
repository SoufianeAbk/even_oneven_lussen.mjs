import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = 1;

while(getal <= 20){
    if(getal % 2 == 0){    
    console.log(getal) 
    }
    getal += 1;
}

process.exit()