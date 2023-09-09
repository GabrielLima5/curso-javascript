const numeros = [0, 1, 2, 3, 4, 5, 6];
function verificaPares(elemento) {
  if (elemento % 2 == 0) {
    console.log(`O número ${elemento} é par.`);
  } else {
    console.log(`O número ${elemento} é ímpar`);
  }
}
numeros.forEach(verificaPares());
