let idade;
const calcularIdade = function (anoDeNascimento) {
  global.anoAtual = new Date().getFullYear();
  idade = anoAtual - anoDeNascimento;
  return idade;
};

console.log(calcularIdade(1975));

console.log(idade);
// Acima, variável declarada fora da função, que pode ser usada fora dela.

console.log(anoAtual);
// Acima, variável declarada como global dentro de uma função, que pode ser usada fora dela.
