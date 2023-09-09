function contaVogais(palavra){
    let totalVogais = 0;
    let vogais = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i <= palavra.length; i++){
        if (vogais.indexOf(palavra[i]) !== -1){
            totalVogais++
        }
    }

    if (!totalVogais){
        console.log(`Não há nenhuma vogal aqui.`)
    } else if (totalVogais == 1){
        console.log(`A palavra ${palavra} possui ${totalVogais} vogal.`)
    } else{
        console.log(`A palavra ${palavra} possui ${totalVogais} vogais.`)
    }
}

contaVogais('abc')
