const paises = ["Brasil", "Peru", "Uruguai", "Paraguai", "Chile"];
console.log(
  paises.filter(function (valor, indice) {
    return valor.length > 5;
  })
);
