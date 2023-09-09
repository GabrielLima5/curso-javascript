function dividir(a, b) {
  if (typeof a !== "number") {
    throw "É necessário informar um número.";
  } else if (typeof b !== "number") {
    throw "É necessário informar um número.";
  } else if (b == 0) {
    throw "É impossível dividir por zero.";
  }
  return a / b;
}

try {
  console.log(dividir(20, 10));
} catch (erro) {
  console.error(erro);
}

try {
  console.log(dividir(100, 0));
} catch (erro) {
  console.error(erro);
}

try {
  console.log(dividir(50, 5));
} catch (erro) {
  console.error(erro);
}

try {
  console.log(dividir(100, "arroz"));
} catch (erro) {
  console.error(erro);
} finally {
  console.warn("Finalizado.");
}
