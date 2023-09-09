function nascimento(birthYear) {
  if (typeof birthYear !== "number") {
    throw "É necessário que o ano de nascimento seja um número.";
  } else if (birthYear < 0) {
    throw "Por favor, informe uma data de nascimento válida.";
  }
  return 2023 - birthYear;
}

console.log(nascimento("arroz"));
