const input = require('prompt-sync')();

function validarSenha(senha) {
    if (senha === '1234') {
        return true;}
    else {
        return false;}
}

let tentativa=input('Digite a senha secreta: ');
let correta=validarSenha(tentativa);

if (correta === true) {
    console.log('Acesso liberado!');}
else {
    console.log('Senha incorreta!');}
