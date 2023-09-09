const site = "www.hcode.com.br";
console.log(site.length);
console.log(site.substring(4, 9));
console.log(site.charAt(5));
console.log(site.substr(4, 9));
console.log(site.toUpperCase());
console.log(site.replace("hcode", "hcodelab"));
console.log(site.includes(".com"));
console.log(site.indexOf("hcode"));

const mensagemBoasVindas = "Seja bem-vindo ao HcodeLab.";
console.log(mensagemBoasVindas.split(" "));

const email = "rafa@hcode.com.br";
const emailSplit = email.split("@");
const nomeDeUsuario = email.substr(0, 4);
const dominio = email.substr(4, email.length);

/* const nomeDeUsuario = emailSplit[0];
const dominio = emailSplit[1];*/

console.log(nomeDeUsuario, dominio);
