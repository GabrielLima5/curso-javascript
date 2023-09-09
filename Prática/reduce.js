const arrayHoras = [20, 29, 48, 12, 15]

console.log(arrayHoras.map(item => {

  return item*2

}))

const total = arrayHoras.reduce((acc, valor) => {

  return acc + valor

})

const media = total / arrayHoras.length

console.log("TOTAL", total)
console.log("MÉDIA", media)
