class Livro {
  #preco;
  #estoque;

  constructor(titulo, autor, preco, estoque, categoria) {
    this.titulo = titulo;
    this.autor = autor;
    this.#preco = preco;
    this.#estoque = estoque;
    this.categoria = categoria; // Composição: guarda um objeto Categoria inteiro
  }

  // Getter para permitir a leitura do preço privado no Carrinho
  get preco() {
    return this.#preco;
  }

  descrever() {
    console.log("Título: " + this.titulo);
    console.log("Autor: " + this.autor);
    if (this.categoria) {
      console.log("Categoria: " + this.categoria.nome);
    }
  }
}

module.exports = Livro;