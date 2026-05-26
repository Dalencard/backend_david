const input = require('prompt-sync')();

function somar(a, b) {
    return a + b;}

function subtrair(a, b) {
    return a - b;}

let n1=Number(input('Digite o primeiro número: '));
let n2=Number(input('Digite o segundo número: '));

let resultadoSoma=somar(n1, n2);
let resultadoSubtracao=subtrair(n1, n2);

console.log(`A soma é: ${resultadoSoma}`);
console.log(`A subtração é: ${resultadoSubtracao}`);
