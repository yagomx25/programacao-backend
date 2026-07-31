const estante = require("./estante");

console.log("===================================");
console.log(" MINHA ESTANTE");
console.log("===================================");
console.log("");

// ===== LIVRO 1 =====
console.log("Titulo: " + estante.livro1.titulo);
console.log("Autor: " + estante.livro1.autor);
console.log("Preco: R$ " + estante.livro1.preco);
console.log("Estoque: " + estante.livro1.estoque + " unidades");

console.log("");

// ===== LIVRO 2 — Lacunas preenchidas =====
console.log("Titulo: " + estante.livro2.titulo);
console.log("Autor: " + estante.livro2.autor);
console.log("Preco: R$ " + estante.livro2.preco);
console.log("Estoque: " + estante.livro2.estoque + " unidades");

console.log("");
console.log("===================================");