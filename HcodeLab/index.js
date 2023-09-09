let numero1 = prompt('Digite o primeiro número: ');
let numero2 = prompt('Digite o segundo número: ');
let operador = prompt('Você deseja somar, subtrair, multiplicar ou dividir os números? Digite apenas o sinal do operador: ')

function calculo(numero1, operador, numero2){
    return eval(`${numero1} ${operador} ${numero2}`)
}

console.log(calculo(numero1, operador, numero2));