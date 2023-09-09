// Obtendo uma única função do módulo
/*const somar = require("./calculos");
console.log(somar(4, 12));*/

// Obtendo o conjunto de funções do módulo
const objetoCalculo = require("./calculos");

console.log(objetoCalculo.subtrair(10, 50));
console.log(objetoCalculo.somar(10, 40));
console.log(objetoCalculo.multiplicar(20, 30));
console.log(objetoCalculo.dividir(20, 2));
console.log(objetoCalculo.regraDeTres(20, 10, 5));
