class Carrinho {
  #livros;

  constructor() {
    this.#livros = []; // Inicializa com um array vazio
  }

  adicionarLivro(livro) {
    this.#livros.push(livro); // Adiciona o livro ao final do array
  }

  listar() {
    console.log("--- Itens do carrinho ---");
    this.#livros.forEach((livro) => {
      console.log(`${livro.titulo} - R$ ${livro.preco.toFixed(2)}`);
    });
  }

  calcularTotal() {
    let total = 0; // Usamos 'let' pois o valor muda a cada volta do loop
    this.#livros.forEach((livro) => {
      total = total + livro.preco;
    });
    return total;
  }
}

module.exports = Carrinho;