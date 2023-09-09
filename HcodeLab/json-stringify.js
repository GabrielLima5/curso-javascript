const pessoa = {
  primeiroNome: "Glaucio",
  ultimoNome: "Santos",
  linguagensPreferidas: ["PHP", "JavaScript", "Java"],
  idade: 50,
  mostrarNomeCompleto: function () {
    return `${this.primeiroNome} ${this.ultimoNome}`;
  },
};

console.log(pessoa);
console.log(pessoa.mostrarNomeCompleto());
console.log(JSON.stringify(pessoa, null, 4));
