function contarLetra(texto, letra) {
    let count=0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            count = count + 1;}}
    return count;}

console.log(`A letra 'a' em 'banana' aparece: ${contarLetra('banana', 'a')} vezes`);
