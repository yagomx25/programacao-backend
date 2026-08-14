const Categoria = require("./Categoria");
const Livro = require("./Livro");
const Carrinho = require("./Carrinho");

// 1. Instanciando uma Categoria
const catTec = new Categoria("Tecnologia", "livros sobre programacao");

// 2. Instanciando Livros associados à Categoria (5º parâmetro)
const l1 = new Livro("Clean Code", "Robert C. Martin", 89.90, 12, catTec);
const l2 = new Livro("Eloquent JavaScript", "Marijn Haverbeke", 45.00, 999, catTec);

// 3. Teste de Composição Simples (Livro -> Categoria)
console.log("=== Teste do Livro ===");
l1.descrever();
console.log("Descrição da Categoria (acesso em cadeia): " + l1.categoria.descricao);
console.log("\n");

// 4. Teste do Carrinho (Carrinho -> Livros)
console.log("=== Teste do Carrinho ===");
const carrinho = new Carrinho();
carrinho.adicionarLivro(l1);
carrinho.adicionarLivro(l2);

carrinho.listar();
console.log("Total: R$ " + carrinho.calcularTotal().toFixed(2));