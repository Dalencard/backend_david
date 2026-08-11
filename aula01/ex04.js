const input = require('prompt-sync')();

let num=Number(input('Digite um número: '));

for (let i=1; i<=10; i++){
    let resultado=num*i;
    console.log(`${num} x ${i} = ${resultado}`);}