const texto =
  '{"primeiroNome": "Glaucio", "ultimoNome": "Santos", "linguagensPreferidas": ["PHP", "JavaScript", "Java"], "idade": 50}';
const objeto = JSON.parse(texto);
console.log(objeto.primeiroNome);
