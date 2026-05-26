const input = require('prompt-sync')();

const calcularDobro = (numero) => {
    return numero * 2;}

let valor=Number(input('Digite um número: '));
let resultado=calcularDobro(valor);

console.log(`O dobro do número é: ${resultado}`);
