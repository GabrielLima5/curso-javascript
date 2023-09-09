// Obtendo o módulo do servidor express
const express = require("express");

// Invocando o servidor express
const servidor = express();

// Criando um banco de dados
const NeDB = require("nedb");
const db = new NeDB({
  filename: "produtos.db",
  autoload: true,
});

servidor.use(express.json());
servidor.use(express.urlencoded({ extended: true }));
servidor.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
// Configurando as rotas da API
// Listando dados
servidor.get("/produtos", (request, response) => {
  db.findOne({ _id: request.params.id }).exec((erro, dados) => {
    if (erro) {
      console.log(erro);
    } else {
      response.setHeader("Content-Type", "application/json");
      response.status(200).json(dados);
    }
  });
});

// Salvando dados
servidor.post("/produtos", (request, response) => {
  db.insert(request.body, (erro, novoProduto) => {
    if (erro) {
      console.error(erro);
    } else {
      response.setHeader("Content-Type", "application/json");
      response.status(200).json(novoProduto);
    }
  });
});

// Editando dados
servidor.put("/produtos/:id", (request, response) => {
  db.update({ _id: request.params.id }, request.body, (erro) => {
    if (erro) {
      console.error(erro);
    } else {
      response.setHeader("Content-Type", "application/json");
      response.status(200).json({
        mensagem: `Produto atualizado com sucesso: ${request.params.id}`,
      });
    }
  });
  //response.status(200).send(request.params.id);
  response.status(200).send(request.body);
});

// Excluindo dados
servidor.delete("/produtos", (request, response) => {
  db.remove({ _id: request.params.id }, {}, (erro, registrosRemovidos) => {
    if (erro) {
      console.log(erro);
    } else {
      response.setHeader("Content-Type", "application/json");
      response.status(200).json({ registrosRemovidos });
    }
  });
});

// Pedindo para que o servidor escute a porta 4000 e avise isso
servidor.listen(4000, () => {
  console.log("O servidor já está rodando.");
});
