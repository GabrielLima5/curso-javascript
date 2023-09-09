function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function regraDeTres(a, b, c) {
  return dividir(multiplicar(c, b), a);
}

// Exportando uma única função
// module.exports = somar;

// Exportando um conjunto de funções
/*module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  regraDeTres,
};*/

export default {
  somar,
  subtrair,
  multiplicar,
  dividir,
  regraDeTres,
};
