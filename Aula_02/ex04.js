const input = require('prompt-sync')();

function executar(funcaoCallback) {
    console.log('Iniciando');
    funcaoCallback();
    console.log('Terminou');}

function darOi() {
    console.log('Função de callback sendo executada');}

executar(darOi);
