const input = require('prompt-sync')();

let notas=0; let soma=0;
for ( let i=1; i<=5; i++){
    let nota=Number(input(`Digite a nota ${i}: `));
    soma=soma+nota;
}
let media=soma/5;

if (media>=7){
    console.log("Aprovado")}
else if (media>=5){
    console.log("Recuperação")}
else {
    console.log("Reprovado")}