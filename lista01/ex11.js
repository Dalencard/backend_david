const readline = require('readline-sync');

function podeVotar(idade) {
    if (idade >= 16) {
        return true;}
    else {
        return false;}
}

let id=Number(readline.question('Digite sua idade: '));
let v=podeVotar(id);

if (v === true) {
    console.log('true');}
else {
    console.log('false');}
