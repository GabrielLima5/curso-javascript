const diaDaSemana = new Date().getDay();

console.log(diaDaSemana);

switch (diaDaSemana) {
  case 5:
    console.log("Hoje é sexta-feira.");
    break;

  case 0:
    console.log("Hoje é domingo.");
    break;

  case 1:
    console.log("Hoje é segunda");
    break;

  default:
    console.log("Este dia não existe.");
}
