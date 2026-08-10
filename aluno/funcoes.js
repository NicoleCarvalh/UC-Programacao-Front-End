// Exercicio 1
// function calcularMaior(...numeros){
//   console.log(Math.max(...numeros));
// }

// calcularMaior(5,6,4);

// Exercicio 2
// function concatenar(val1, val2, val3, separador = "|"){
//   console.log(`${val1} ${separador} ${val2} ${separador} ${val3}`)
// }

// concatenar("amigo", "da", "vizinhança");

// Exercicio 3
// function conversorHoras(minutos) {
//   let resultado = minutos / 60;
//   console.log(resultado);
// }

// conversorHoras(90);

// Exercício 4
// function retornarQuantidadeDeGasolina(quilometros, consumoMedio){
//   let totalIdaVolta = quilometros*2

//   let consumoUnidade = consumoMedio/100

//   return (`A quantidade de gasolina necessária em litros é de:
//     ${totalIdaVolta*consumoUnidade}
//     `)
// }

// console.log(retornarQuantidadeDeGasolina(100, 8))

// Exercício 5
function exibirDetalhes(produto, preco) {
  return `${produto} - R$ ${preco.toFixed(2)}`;
}

// console.log(exibirDetalhes("Jaqueta Jeans", 220.5));

//5.2
function calcularParcela(precoTotal, parcela = 1) {
  if (parcela > 12) {
    return precoTotal;
  }

  return (precoTotal / parcela).toFixed(2);
}

// console.log(calcularParcela(100.5, 2));

//5.3
function desconto(valorTotal, desconto) {
  if (desconto > valorTotal) {
    return 0;
  }

  return (valorTotal - desconto).toFixed(2);
}

// console.log(desconto(100, 25));

//5.4
function cupomDesconto(valorPedido, codigoCupom) {

  switch (codigoCupom) {
    case "CUPOM50":
      return desconto(valorPedido, 50);

    case "CUPOM100":
      return desconto(valorPedido, 100);

    case "CUPOM200":
      return desconto(valorPedido, 200);

    default:
      return valorPedido;
  }
}

console.log(cupomDesconto(200, "CUPOM50"));
