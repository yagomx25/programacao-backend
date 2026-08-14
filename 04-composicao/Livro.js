class Livro {
  #preco;
  #estoque;

  constructor(titulo, autor, preco, estoque, categoria) {
    this.titulo = titulo;
    this.autor = autor;
    this.#preco = preco;
    this.#estoque = estoque;
    this.categoria = categoria; // 👈 ESSA LINHA É A QUE FALTAVA!
  }

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