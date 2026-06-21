function min(a, b) {
    if (a < b) {
        return a;}
    else {
        return b;}
}

const minArrow = (a, b) => {
    if (a < b) {
        return a;}
    else {
        return b;}
};

console.log(`Min (normal) 5 e 10: ${min(5, 10)}`);
console.log(`Min (arrow) 20 e 15: ${minArrow(20, 15)}`);
