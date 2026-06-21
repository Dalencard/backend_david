function range(inicio, fim) {
    let arr = [];
    for (let i = inicio; i <= fim; i++) {
        arr.push(i);}
    return arr;}

function soma(array) {
    let total=0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i];}
    return total;}

console.log(`Soma do range(1, 10): ${soma(range(1, 10))}`);
