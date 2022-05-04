var pessoa = {
  nome: 'Gustavo',
  idade: 24,
};

console.log(pessoa.nome, pessoa.idade);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados + lado;
  },
};

console.log(quadrado.area(10));
console.log(quadrado.perimetro(20));

console.log(Math.random());

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
};

menu.backgroundColor = '#fff';

menu.color = 'blue';

console.log(menu.color);
