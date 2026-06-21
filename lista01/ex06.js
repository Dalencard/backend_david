const readline = require('readline-sync');

let num=Number(readline.question('Digite um numero: '));

for (let i = num; i >= 1; i--) {
    console.log(i);}

console.log("Fim!");
