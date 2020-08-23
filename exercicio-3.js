// Crie um programa que pergunta seu nome. Depois que digitar o nome, o programa deverá responder 'Olá [nome]'. Enquanto digitar qualquer palavra, imprima na tela o que foi digitado mas avise que, para sair, é só dizer 'Tchau'. O programa vai dizer 'Tchau [nome]' e finalizar.

const readlineSync = require("readline-sync");

let nome = readlineSync.question("Digite seu nome: ");
console.log("Olá " + nome);

let palavraDigitada = readlineSync.question("Digite qualquer palavra: ");

while (palavraDigitada != "tchau") {
  console.log("Você digitou " + palavraDigitada + ". Para sair digite tchau");
  palavraDigitada = readlineSync.question("Digite qualquer palavra: ");
}

console.log("Tchau " + nome);
