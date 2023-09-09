// Declaração de uma função
function darBoasVindas(nome, evento) {
  console.log(`Seja bem-vindo ao ${evento}, ${nome}.`);
}
darBoasVindas("João", "Hcode Lab");
darBoasVindas("Rafael", "Hcode Café");

// Expressão de função
const darAdeus = function (nome, evento) {
  console.log(`Até a próxima, ${nome}. Nos vemos no próximo ${evento}.`);
};
darAdeus("João", "Hcode Lab");
darAdeus("Rafael", "Hcode Café");

function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 10));
