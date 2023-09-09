const exibirNome = function (nome) {
  console.log(nome);
};

const exibirSobrenome = (sobrenome) => {
  console.log(sobrenome);
};

//exibirNome("João");
//exibirSobrenome("Rangel");

const pessoas = ["Geisa", "João", "Sara"];

const nomesInvertidos1 = pessoas.map((nome) =>
  nome.split("").reverse().join("")
);

const nomesInvertidos2 = function pessoas(nome) {
  pessoas.map(nome.split("").reverse().join(""));
};

console.log(nomesInvertidos);
