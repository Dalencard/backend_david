let turma = [
    { nome: 'Ana', nota: 8.5 },
    { nome: 'Bruno', nota: 6.0 },
    { nome: 'Carlos', nota: 9.0 },
    { nome: 'Diana', nota: 5.5 },
    { nome: 'Eduardo', nota: 7.5 }
];

let comSituacao = turma.map(a => {
    return {
        nome: a.nome,
        nota: a.nota,
        situacao: a.nota >= 7 ? 'Aprovado' : 'Reprovado'
    };});

let aprovados = comSituacao.filter(a => a.situacao === 'Aprovado');
console.log(`Quantidade de aprovados: ${aprovados.length}`);

let somaNotas=0;
for (let i = 0; i < turma.length; i++) {
    somaNotas = somaNotas + turma[i].nota;}

let media = somaNotas / turma.length;
console.log(`Média geral da turma: ${media}`);
