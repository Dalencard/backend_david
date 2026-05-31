const readline = require('readline-sync');

let produtos = [];

for (let i = 1; i <= 3; i++) {
    let nomeProduto = readline.question(`Digite o nome do produto ${i}: `);
    let precoProduto = Number(readline.question(`Digite o preco do produto ${i}: `));
    
    produtos.push({
        nome: nomeProduto,
        preco: precoProduto
    });}

let produtosFiltrados = produtos.filter(p => p.preco > 20.00);

console.log('Produtos com preço acima de R$ 20,00:');
console.log(produtosFiltrados);
