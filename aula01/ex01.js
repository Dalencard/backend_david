const input = require('prompt-sync')();

let nome= input('Digite seu nome: ');
let idade=Number(input('Digite sua idade: '));
let cidade=input('Digite sua cidade: ');

console.log(`Olá! Meu nome é ${nome}, tenho ${idade} anos e sou de ${cidade}.`);