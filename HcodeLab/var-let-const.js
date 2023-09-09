// var x let - Hoisting
produto = "Playstation 5";
outroProduto = "XBOX Series X";

let produto;
var outroProduto;

console.log(outroProduto);
console.log(produto);

// var x let - ESCOPO
let numero1 = 30;
let numero2 = 25;

if (numero1 > numero2) {
  var mensagem = "Olá, Hcode!";
}

console.log(mensagem);

// const

const carros = ["Peugeot", "Gurgel", "Ferrari", "Fusca"];
