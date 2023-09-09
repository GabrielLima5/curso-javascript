const data = [
    { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
    { name: "João", age: 18, sallary: 1500, driverLicense: false },
    { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
    { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
    { name: "Érica", age: 16, sallary: 0, driverLicense: false },
  ];


// 1 - REVERSE (inverte a posição dos elementos de um array)
console.log("========REVERSE========")
console.log(data.reverse())
console.log("=======================")


// 2 - FIND (procura um item do array com base em alguma condição, é semelhante ao FILTER)
console.log("=======FIND========")
const highSallary = 5000
const highestSallary = data.find((user) => {
    return user.sallary > highSallary
})

console.log(highestSallary)
console.log("=======================")


// 3 - FINDINDEX (retorna o índice de um elemento de um array com base em alguma condição)
console.log("========FINDINDEX========")
const lowestSallary = data.findIndex((user) => {
    return user.sallary > 0 && user.sallary < 2000
})

data[lowestSallary].sallary += 200
console.log(data)
console.log("=======================")


// 4 - INCLUDES (verifica se algo está incluído em um array, retorna um booleano)
console.log("========INCLUDES========")
const numbers = [1, 2, 3, 4, 5]
const hasFour = numbers.includes(4)
console.log(hasFour)
console.log("=======================")


// 5 - MAP (cria um novo array com os resultados obtidos por uma função de callback)
console.log("========MAP========")
const newsletter = data.map((user) => {
    return user.newsletter = false
})

console.log(data)
console.log("=======================")


// 6 - FILTER (filtra um array com base em alguma condição)
console.log("========FILTER========")
const driverLicense = data.filter((user) => {
    return user.driverLicense === true
})

console.log(driverLicense)
console.log("=======================")


// 7 - REDUCE (reduz o array a um único valor)
console.log("========REDUCE========")
const totalSallary = data.reduce((totalSallary, user) => {
    return totalSallary + user.sallary
}, 0)

console.log(totalSallary)
console.log("=======================")


// 8 - FOREACH (percorre o array e executa uma função para cada item dele)
console.log("========FOREACH========")

const showUsernames = data.forEach((user) => {
    console.log(`Olá, ${user.name}`)
})

console.log("=======================")


// 9 - SOME (verifica se algum item do array satisfaz alguma condição)
console.log("=========SOME===========")

const someoneWithNewsLetter = data.some((user) => user.newsletter)
console.log(someoneWithNewsLetter)

console.log("=======================")

// 10 - EVERY (verifica se todos os itens do array satisfazem alguma condição)
console.log("=========EVERY=========")

const everyUserHasName = data.every((user) => user.name)
console.log(everyUserHasName)

console.log("=======================")
