var pessoa = {
  nome: 'Gustavo',
  idade: 24,
};

console.log(pessoa.nome);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

var menu = {
  with: 800,
  height: 500,
  backgroundColor: '#84E',
};
