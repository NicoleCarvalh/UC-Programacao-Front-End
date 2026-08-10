// Exercício 1
// const produto1 = {
//   nome: "Couve",
//   preco: 5,
//   categoria: "Hortifruti",
// };

// const produto2 = {
//   nome: "Leite",
//   preco: 6,
//   categoria: "Hortifruti",
// };

// function comparacao(a, b) {
//   if (a.preco > b.preco) {
//     return `O valor mais alto é do produto ${a.nome}, de R$${a.preco}`;
//   } else if (b.preco > a.preco) {
//     return `O valor mais alto é do produto ${b.nome}, de R$${b.preco}`;
//   } else {
//     return "Ambos valores são iguais";
//   }
// }

// console.log(comparacao(produto1, produto2));

function Item(nome, preco, quantidade) {
  this.nome = nome;
  this.preco = preco;
  this.quantidade = quantidade;
  this.valorTotal = preco * quantidade;
}

const carrinho = {
  itens: [{ nome: "Leite", preco: 10, quantidade: 5, valorTotal: 50 }],

  adicionarProduto(nome, preco, quantidade) {
    if (this.itens.includes(nome)) {
      this.itens[nome].quantidade += quantidade;
    } else {
      this.itens.push(new Item(nome, preco, quantidade));
    }
  },
};

carrinho.adicionarProduto("Leite", 10, 2);

console.log(carrinho.itens);
