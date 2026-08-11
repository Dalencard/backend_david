// 1. Importar o Express ( igual ao require do readline - sync )
const express = require('express');

// 2. Criar a aplicacao
const app = express();

// 3. Configurar o app para entender JSON
app.use(express.json());

const produtos = [
    { id: 1, nome: "Notebook", preco: 12.00 },
    { id: 2, nome: "Mouse", preco: 150.00 },
    { id: 3, nome: "Teclado", preco: 250.00 },
    { id: 4, nome: "Monitor", preco: 1200.00 }
];

// 4. Criar a primeira rota (GET na raiz )
app.get('/', (req, res) => {

res.json({ mensagem: " Meu servidor esta no ar!" });
});


// Arrey em memória para simular um banco de dados
app.get('/alunos', (req, res) => {
const alunos = [
{ id: 1, nome: "Ana", nota: 8.5 },
{ id: 2, nome: " Bruno ", nota: 7.0 }
];
res.json(alunos);
});


//exercicio 1 
app.get('/sobre', (req , res) => {
res.status(200).json({
        nome: "David",
        disciplina: "Back-End",
        ano: "2ºM"
    });
});

//exercicio 2
app.get('/produtos', (req, res) => {
res.json(produtos);
});

//exercicio 3
app.get('/status', (req , res) => {
res.status(200).json({
        online: true,
        "o uso": "Servidor funcionando corretamente"
    });
});

//exercicio 4
app.get('/produtos/caros', (req , res) => {
const filtro = produtos.filter(p => p.preco > 100);
res.json(filtro);
});


// 5. Ligar o servidor na porta 3000
app.listen(3000, () => {
console.log(" Servidor rodando em http http://localhost:3000 ");
});