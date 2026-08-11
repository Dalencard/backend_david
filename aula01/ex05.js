const input = require('prompt-sync')();

let pares=0; let impares=0; let num=0;

for (let i=1; i<=10; i++){
    num=Number(input(`Digite o número ${i}: `));
    if (num%2===0){
        pares=pares+1;}
    else {
        impares=impares+1;}}

console.log(`Quantidade de pares: ${pares}`);
console.log(`Quantidade de ímpares: ${impares}`);