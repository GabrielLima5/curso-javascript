const usuario = {
  nome: "Glaucio",
  email: "glaucio@gmail.com",
  senha: "123456",
};

const pessoa = {
  nome: "Glaucio Daniel",
  idade: 45,
};
//console.log(uniao);

const uniao = Object.assign(usuario, pessoa);
console.log(Object.keys(uniao));

Object.keys(uniao).forEach(function (chave) {
  console.log(uniao[chave]);
});

console.log("==========================");

for (let chave in uniao) {
  console.log(chave);
}
