let produtos = [
    { id: 1, nome: 'Teclado', preco: 150.00 },
    { id: 2, nome: 'Mouse', preco: 80.00 },
    { id: 3, nome: 'Monitor', preco: 900.00 },
    { id: 4, nome: 'Cabo USB', preco: 25.00 }
];

for (let i = 0; i < produtos.length; i++) {
    console.log(`ID: ${produtos[i].id} | Nome: ${produtos[i].nome} | Preço: R$ ${produtos[i].preco}`);}

produtos.push({ id: 5, nome: 'Fone de Ouvido', preco: 120.00 });

console.log(`Novo tamanho do array: ${produtos.length}`);
