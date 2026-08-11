const readline = require('readline-sync');

let largura=Number(readline.question('Digite a largura do tabuleiro: '));
let altura=Number(readline.question('Digite a altura do tabuleiro: '));
let tabuleiro="";

for (let i = 0; i < altura; i++) {
    for (let j = 0; j < largura; j++) {
        if ((i + j) % 2 === 0) {
            tabuleiro = tabuleiro + " ";}
        else {
            tabuleiro = tabuleiro + "#";}}
    tabuleiro = tabuleiro + "\n";}

console.log(tabuleiro);
