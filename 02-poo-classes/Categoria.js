class Categoria {
#nome;
#descricao;
constructor(nome, descricao) {
this.#nome = nome;
// LACUNA 1 → copie a linha de cima e troque nome por descricao
}
// ----- LEITURA (getters) -----
get nome() {
return this.#nome;
}
get descricao() {
// LACUNA 2 → devolva a descricao. Use a linha do get nome() como modelo
}
// ----- ESCRITA COM VALIDAÇÃO (setter) -----
set nome(novoNome) {
if (novoNome.length < 3) {
console.log("ERRO: o nome da categoria precisa de pelo menos 3 letras.");
return;
}
// LACUNA 3 → guarde o novoNome no atributo privado #nome
}
// ----- MÉTODO -----
descrever() {
console.log("Categoria: " + this.#nome);
// LACUNA 4 → imprima a descricao, usando a linha de cima como modelo
// A saída deve ficar: Descricao: livros sobre programacao
}
}
module.exports = Categoria;