// Exercício 2
// let codigoDeAcesso = "Bags";

// let senha = prompt("Digite a senha para entrar: ");

// if(senha == codigoDeAcesso){
//   alert("Você pode entrar!")
// } else {
//   alert("Acesso negado.")
// }

// Exercício 3
// let idade = prompt("Insira sua idade: ");
// let salario = prompt("Insira sua renda: ");

// if(idade >= 18 && salario >= 3000){
//   alert("Você está apto!")
// } else {
//   alert("Não é possível fechar negócio no momento.")
// }

// Exercício 4
// let experiencia = prompt(
//   "Insira a quantidade que possui de experiência em anos: ",
// );

// let formacao = prompt(
//   `Insira seu grau de formação: 
      // 1 - Graduação
      // 2 - Especialização 
      // 3 - Mestrado 
      // 4 - Doutorado`
// );

// let pontuacaoFinal = 0;

// if (experiencia > 5) {
//   pontuacaoFinal += 10;
// } else {
//   pontuacaoFinal += 20;
// }

// if (formacao == 1) {
//   pontuacaoFinal += 10;
// } else if (formacao == 2) {
//   pontuacaoFinal += 20;
// } else if (formacao == 3) {
//   pontuacaoFinal += 30;
// } else if (formacao == 4) {
//   pontuacaoFinal += 10;
// } else {
//   alert("Opção inválida!");

// }

// alert("Sua pontuação para o concurso será de " + pontuacaoFinal)

// Exercício 5
// let nota = prompt("Insira um valor de nota: ");

// if (nota > 7 && nota < 10){
//   alert("A nota informada está entre 7.0 e 10.0.")
// } else {
//   alert("A nota não está entre 7.0 e 10.0.")
// }

// Exercício 6
// let letra = prompt("Insira uma letra: ");

// if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
//   alert("A letra informada é uma vogal!")
// } else {
//   alert("A letra é uma consoante.")
// }

// Exercício 7
// let numero = prompt("Insira um número para verificação: ");

// if (numero % 2 == 0 && numero > 0) {
//   alert("O número é par e positivo");
// } else if (numero % 2 == 0 && numero < 0) {
//   alert("O número é par e negativo");
// } else if (numero % 2 != 0 && numero > 0) {
//   alert("O número é ímpar e positivo");
// } else if (numero % 2 != 0 && numero < 0) {
//   alert("O número é ímpar e negativo");
// }


// Exercício 8
// let idade = prompt("Insira sua idade: ");
// let salario = prompt("Insira sua renda mensal: ");

// if(idade >= 21 && salario >= 3000){
//   alert("Você está apto para financiamento!")
// } else {
//   alert("Não é possível fechar negócio no momento.")
// }

// Exercício 9
let rendaFamiliar = prompt(`Informe sua renda familiar de acordo com a grade abaixo: 
  1 - Até R$ 2.000
  2 - De R$ 2.001 a R$ 4.000 
  3 - Acima de R$ 4.000`)

let desempenhoAcademico = prompt(`Insira seu desempenho acadêmico:
  1 - média até 6.9 
  2 - média de 7.0 a 8.4
  3 - média de 8.5 a 10.0 `)

let pontuacaoFinal = 0;

if(rendaFamiliar == 1){
  pontuacaoFinal+=30
} else if(rendaFamiliar == 2){
  pontuacaoFinal+=20
} else if(rendaFamiliar == 3){
  pontuacaoFinal+=10
}

if(desempenhoAcademico == 1){
  pontuacaoFinal+=5
} else if(desempenhoAcademico == 2){
  pontuacaoFinal+=15
} else if(desempenhoAcademico == 1){
  pontuacaoFinal+=25
}

alert("Sua pontuação total para concorrer a bolsa de estudos é de: " + pontuacaoFinal)