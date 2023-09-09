const calcularIdade = function (anoDeNascimento) {
  const idade = new Date().getFullYear() - anoDeNascimento;
  return idade;
};

console.log(calcularIdade(1975));
