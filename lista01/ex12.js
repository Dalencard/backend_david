function calcular(a, b, operacao) {
    return operacao(a, b);}

const somar = (a, b) => {
    return a + b;};

const subtrair = (a, b) => {
    return a - b;};

const multiplicar = (a, b) => {
    return a * b;};

console.log(`Soma de 5 e 3: ${calcular(5, 3, somar)}`);
console.log(`Subtração de 10 e 4: ${calcular(10, 4, subtrair)}`);
console.log(`Multiplicação de 6 e 2: ${calcular(6, 2, multiplicar)}`);
