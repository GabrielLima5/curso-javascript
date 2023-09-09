function mostrarNome() {
  if (localStorage.getItem("nome")) {
    document.querySelector(
      "#boas-vindas"
    ).innerText = `Seja bem-vindo, ${localStorage.getItem("nome")}`;
  }
}

// Primeiro método
function pegarDados(evento) {
  evento.preventDefault();

  const formulario = document.querySelector("form");
  const dados = {};

  [...formulario.querySelectorAll("input")].forEach((tag) => {
    console.log(tag);
    dados[tag.name] = tag.value;
    localStorage.setItem(tag.name, dados[tag.name]);
  });

  console.log(localStorage);
}

mostrarNome();

// Segundo método
/*const form = new FormData(formulario);
  console.log(form.get("tel"));
  console.log(
    form.forEach((valor, chave) => {
      console.log(valor, chave);
    })
  );*/
