let alunos = [
    { id: 1, nome: 'Ana', nota: 8.5 },
    { id: 2, nome: 'Bruno', nota: 6.0 },
    { id: 3, nome: 'Carlos', nota: 9.0 },
    { id: 4, nome: 'Diana', nota: 5.5 },
    { id: 5, nome: 'Eduardo', nota: 7.5 }
];

let alunosComSituacao = alunos.map(a => {
    return {
        nome: a.nome,
        nota: a.nota,
        situacao: a.nota >= 7 ? 'Aprovado' : 'Reprovado'
    };});

console.log(alunosComSituacao);
