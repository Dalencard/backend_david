const input = require('prompt-sync')();

const secret=42;
let tentativa=0;
let contador=0;

while (tentativa!==secret){
    tentativa=Number(input('Digite um número: '));
    contador=contador+1;

    if (tentativa < secret) {
         console.log('O número secreto é maior.');}
    else {
        console.log('O número secreto é menor.');}
}

console.log('Você acertou.');
console.log(`Número de tentativas: ${contador}`);