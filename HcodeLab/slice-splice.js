const paises = ["Brasil", "Argentina", "Chile", "EUA", "Itália"];
//console.log(paises.slice(1, 4));

paises.splice(3, 2);
console.log(paises);

paises.splice(2, 0, "Canadá", "Mexico");
console.log(paises);
