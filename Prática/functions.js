//Exercício 1 - Use uma função para apresentar uma mensagem de Bom dia no console.
function bomDia() {
  console.log("Bom-dia, mundo!");
}

//bomDia();

//Exercício 2 - Escreva uma função que retorne o cubo de um número fornecido pelo usuário.
const n = 21;

function cubo(numero) {
  return numero * numero * numero;
}

//console.log(cubo(n));

// Exercício 3 - Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C).

const fahrenheit = 100;
const celsius = 100;

function converterToCelsius() {
  return (fahrenheit - 32) / 1.8;
}

function converterToFahrenheit() {
  return celsius * 1.8 + 32;
}
//console.log(converterToCelsius(fahrenheit));
//console.log(converterToFahrenheit(celsius));

// Exercício 4 - Escreva uma função que retorne a área de um triângulo, a partir dos valores de base e altura fornecidos.
const b = "4cm";
const h = "8cm";
function areaTriangulo() {
  return (parseInt(b) * parseInt(h)) / 2;
}

//console.log(areaTriangulo());

// Exercício 5 - Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.

const raio = "8cm";
function perimetroCirculo() {
  return 2 * 3.14 * parseInt(raio);
}

function areaCirculo() {
  return 3.14 * (parseInt(raio) * parseInt(raio));
}

/*console.log(
  `O perímetro do círculo é ${perimetroCirculo()} e a área dele é ${areaCirculo()}.`
);*/

// Exercício 6 - Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.
const number = 508;
const string = number.toString();
const invertedString = string.split("").reverse().join("");
const invertedNumber = parseInt(invertedString);
//console.log(invertedNumber);

// Exercício 7 - Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário. Por exemplo, o usuário informa a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra).
let palavra = "Paralelepípedo";
let contador = 0;
function contaVogais() {
  palavra = palavra.toLowerCase();
  for (let i = 0; i < palavra.length; i++) {
    if (
      palavra.charAt(i) == "a" ||
      palavra.charAt(i) == "e" ||
      palavra.charAt(i) == "i" ||
      palavra.charAt(i) == "o" ||
      palavra.charAt(i) == "u"
    ) {
      contador++;
    }
  }
  return contador;
}

//console.log(`A palavra digitada possui ${contaVogais(palavra)} vogais.`);

// Exercício 7.1 -  Pegue três números. Crie uma função que some-os e outra que os calcule a média.
const n1 = 3;
const n2 = 8;
const n3 = 12;

function soma() {
  return n1 + n2 + n3;
}

function media() {
  return (n1 + n2 + n3) / 3;
}

console.log(`A soma desses números é ${soma()} e a média deles é ${media()}`);

// Exercício 7.2 - Pegue três números. Crie uma função que determine o maior deles e outra que determine o menor.
const num1 = 12;
const num2 = 24;
const num3 = 48;

function maior() {
  if (num1 > num2 && num1 > num3) {
    return num3;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num1;
  }
}

function menor() {
  if (num1 < num2 && num1 < num3) {
    return num1;
  }
}
