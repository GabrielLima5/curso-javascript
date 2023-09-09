const calcularIdade = function (anoDeNascimento, callback) {
  setTimeout(callback, 5000);
  return new Date().getFullYear() - anoDeNascimento;
};

console.log(
  calcularIdade(1975, function () {
    console.log("A função anonima foi chamada!");
  })
);

(function () {
  console.log("Bem-vindo ao HcodeLab.");
})();
