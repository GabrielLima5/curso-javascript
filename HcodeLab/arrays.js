const valores1 = new Array("JavaScript", "Hcode", 2);
const valores2 = ["PHP", "Treinamentos", -25, new Date()];

for (let i = 0; i <= valores1.length; i++) {
  console.log(valores1[i]);
}

console.log("===================");

for (let valor of valores2) {
  console.log(valor);
}
