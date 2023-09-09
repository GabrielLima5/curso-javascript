const ranking = [300, 400, 150, 250, 500];
console.log(ranking.sort().reverse());

const removido = ranking.pop();
console.log(ranking.sort().reverse());
console.log("Valor removido = " + removido);

ranking.push(900);
console.log(ranking.sort().reverse());
