const carrinhoDeCompra = [
  { produto: 'Mouse', preco: 600.1 },
  { produto: 'Teclado', preco: 120.0 },
  { produto: 'Monitro', preco: 1200.2 },
  { produto: 'Fone de Ouvido', preco: 157.25 },
];

const result = carrinhoDeCompra.reduce(
  (previus, currentValue) => previus + currentValue.preco,
  0
);
console.log(result);
