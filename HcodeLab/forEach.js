const paises = ["Brasil", "Peru", "Uruguai", "Paraguai", "Chile"];

paises.forEach(function (valor, indice) {
  console.log(`índice ${indice}: ${valor}`);
});

console.log("================================");

const marcas = [
  { marca: "Ford", modelo: "Focus" },
  { marca: "BMW", modelo: "Z4" },
  { marca: "Fiat", modelo: "Palio" },
  { marca: "Audi", modelo: "A3" },
];

marcas.forEach((elemento) => {
  console.log(`Marca: ${elemento.marca}, Modelo: ${elemento.modelo}`);
});
