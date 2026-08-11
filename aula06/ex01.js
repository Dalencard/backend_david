const express = require('express');
const app = express();
app.use(express.json());

// 1 - array
let pedras = [
	{ id: 1, nome: 'Rubi', tipo: 'Preciosa', valor: 2500.00 },
	{ id: 2, nome: 'Esmeralda', tipo: 'Preciosa', valor: 3200.00 }
];

let proximoId = 3;

// 2 - GET - retorna todas as pedras preciosas
app.get('/pedras', (req, res) => {
	res.json(pedras);
});

// 3 - GET - retorna uma pedra preciosa por id
app.get('/pedras/:id', (req, res) => {
	const id = Number(req.params.id);
	const pedra = pedras.find(p => p.id === id);

	if (!pedra) {
		return res.status(404).json({ erro: 'Pedra preciosa inexistente' });
	}

	res.json(pedra);
});

// 4 - POST - cadastra uma pedra preciosa nova
app.post('/pedras', (req, res) => {
	const novaPedra = {
		id: proximoId,
		nome: req.body.nome,
		tipo: req.body.tipo,
		valor: req.body.valor
	};

	pedras.push(novaPedra);
	proximoId++;
	res.status(201).json(novaPedra);
});

// 5 - PUT - atualiza uma pedra preciosa existente
app.put('/pedras/:id', (req, res) => {
	const id = Number(req.params.id);
	const pedra = pedras.find(p => p.id === id);

	if (!pedra) {
		return res.status(404).json({ erro: 'Pedra preciosa inexistente' });
	}

	pedra.nome = req.body.nome;
	pedra.tipo = req.body.tipo;
	pedra.valor = req.body.valor;
	res.json(pedra);
});

// 6 - DELETE - remove uma pedra preciosa
app.delete('/pedras/:id', (req, res) => {
	const id = Number(req.params.id);
	const pedra = pedras.find(p => p.id === id);

	if (!pedra) {
		return res.status(404).json({ erro: 'Pedra preciosa inexistente' });
	}

	pedras = pedras.filter(p => p.id !== id);
	res.json({ mensagem: 'Pedra preciosa removida com sucesso' });
});

// Ligar o servidor
app.listen(3000, () => {
	console.log('Servidor rodando em http://localhost:3000');
});
