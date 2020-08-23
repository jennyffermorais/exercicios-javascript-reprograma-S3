// Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

const readlineSync = require("readline-sync");

let nota = 0;

do {
  nota = readlineSync.question("Digite uma nota, entre zero e dez: ");
} while (nota < 0 || nota > 10);
console.log("A nota digitada foi: " + nota);
