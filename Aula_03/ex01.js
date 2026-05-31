const aluno = {
    nome: 'David',
    idade: 16,
    cidade: 'São Paulo',
    curso: 'Informática'
};

console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Cidade: ${aluno.cidade}`);
console.log(`Curso: ${aluno.curso}`);

aluno.cidade = 'Cascavel';

console.log(`Nova Cidade: ${aluno.cidade}`);
