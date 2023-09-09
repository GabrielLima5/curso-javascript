const notas = [8, 7, 5, 6, 9, 9, 8, 7, 7, 5, 9, 9];
const notasTotal = notas.reduce(function (total, notaAtual) {
  return total + notaAtual;
}, 0);
console.log(notasTotal);
console.log(Math.ceil(notasTotal / notas.length));
console.log(Math.round(notasTotal / notas.length));
