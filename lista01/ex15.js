let produtos = [
    { id: 1, nome: 'Teclado', preco: 150.00 },
    { id: 2, nome: 'Mouse', preco: 80.00 },
    { id: 3, nome: 'Monitor', preco: 900.00 },
    { id: 4, nome: 'Cabo USB', preco: 25.00 },
    { id: 5, nome: 'Fone', preco: 120.00 }
];

let produto3 = produtos.find(p => p.id === 3);
console.log(`Produto com id 3: ${produto3.nome}`);

let caros = produtos.filter(p => p.preco > 100.00);
console.log('Produtos acima de 100:');
console.log(caros);

let nomes = produtos.map(p => p.nome);
console.log(`Nomes dos produtos: ${nomes} `);

console.log('Catálogo:');
produtos.forEach(p => {
    console.log(`- ${p.nome} (R$ ${p.preco})`);});
