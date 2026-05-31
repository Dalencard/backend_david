let produtos = [
    { id: 1, nome: 'Teclado', preco: 150.00 },
    { id: 2, nome: 'Mouse', preco: 80.00 },
    { id: 3, nome: 'Monitor', preco: 900.00 },
    { id: 4, nome: 'Cabo USB', preco: 25.00 },
    { id: 5, nome: 'Fone de Ouvido', preco: 120.00 }
];

let produtoEncontrado = produtos.find(p => p.id === 3);
console.log(`Produto encontrado com ID 3: ${produtoEncontrado.nome}`);

let produtosCaros = produtos.filter(p => p.preco > 50.00);
console.log('Produtos com preço acima de R$ 50,00:');
console.log(produtosCaros);
