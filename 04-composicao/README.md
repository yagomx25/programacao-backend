# 04 — Composição e Clean Code

## O que foi feito
`Livro` passou a ter uma `Categoria` (composição "tem um"). Criação da classe `Carrinho`, que guarda vários `Livro` em um array (composição "tem muitos"), usando `forEach` para listar itens e calcular o total. Revisão das classes com princípios de clean code.

## O que eu aprendi
- A diferença entre "é um" (herança) e "tem um" (composição)
- Um atributo pode guardar um objeto inteiro, não só texto ou número
- Array guarda vários itens; `forEach` repete uma ação para cada um
- Nomes claros, responsabilidade única, métodos pequenos e evitar números mágicos

## Esboço UML
```text
┌──────────┐  tem uma   ┌───────────┐
│  Livro   │───────────>│ Categoria │
└──────────┘            └───────────┘
     ▲
 tem muitos
     │
┌──────────┐
│ Carrinho │
└──────────┘


┌─────────────────────────┐         tem uma        ┌─────────────────────────┐
│          Livro          │───────────────────────>│        Categoria        │
├─────────────────────────┤                        ├─────────────────────────┤
│ - #preco                │                        │ + nome                  │
│ - #estoque              │                        │ + descricao             │
│ + titulo                │                        ├─────────────────────────┤
│ + autor                 │                        │ (nenhum método)         │
│ + categoria             │                        └─────────────────────────┘
├─────────────────────────┤
│ + get preco()           │
│ + get estoque()         │
│ + descrever()           │
└─────────────────────────┘
             ▲
             │
         tem muitos
             │
┌─────────────────────────┐
│        Carrinho         │
├─────────────────────────┤
│ - #livros               │
├─────────────────────────┤
│ + adicionarLivro(livro) │
│ + listar()              │
│ + calcularTotal()       │
└─────────────────────────┘