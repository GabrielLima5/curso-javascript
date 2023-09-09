const fabricantes1 = ["Bombardier", "Airbus", "Boeing", "Embraer"];
fabricantes1.forEach(function (fabricante) {
  console.log(`Fabricante de avião: ${fabricante}`);
});

console.log("==================================");

const fabricantes2 = [
  { fabricante: "Airbus", modelo: "A320" },
  { fabricante: "Boeing", modelo: "737-800" },
  { fabricante: "Embraer", modelo: "E195-E2" },
];

fabricantes2.forEach(function (elemento) {
  console.log(
    `A ${elemento.fabricante} fabricou novos modelos do ${elemento.fabricante} ${elemento.modelo}`
  );
});
