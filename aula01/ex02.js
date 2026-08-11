const input = require('prompt-sync')();

let num1=Number(input('Digite o primeiro número: '));
let num2=Number(input('Digite o segundo número: '));

let soma=num1+num2;
let sub=num1-num2;
let mult=num1*num2;
let div=num1/num2;

console.log(`A soma dos números é: ${soma}`);
console.log(`A subtração dos números é: ${sub}`);
console.log(`A multiplicação dos números é: ${mult}`);

if(num2 !== 0){
    console.log(`A divisão dos números é: ${div}`);}
 else {
    console.log('Não é possível dividir por zero.');}