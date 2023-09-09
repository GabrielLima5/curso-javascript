function imc(massa, altura) {
  return massa / (altura * altura);
}

const massa = 80;
const altura = 1.63;
const result = imc(massa, altura);
console.log(result);

if (result > 30) {
  console.log("Cê tá obeso!");
} else {
  console.log("Não está obeso");
}
