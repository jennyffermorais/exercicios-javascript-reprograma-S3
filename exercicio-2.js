// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

const readlineSync = require("readline-sync");

let nomeUsuario = readlineSync.question("Digite o nome do usuario: ");
let senha = readlineSync.question("Digite a senha: ", {
  hideEchoBack: true,
});

while (nomeUsuario === senha) {
  console.log("A senha não pode ser igual ao nome do usuario!");

  nomeUsuario = readlineSync.question("Digite o nome do usuario: ");
  senha = readlineSync.question("Digite a senha: ", {
    hideEchoBack: true,
  });
}
console.log("Informações registradas!");
