// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;

var resultado = 35;

// Crie duas expressões que retornem NaN
var nome = 'Gustavo';
console.log(+nome);

// Somar a string '200' com o número 50 e retornar 250
var somar1 = '200';
var somar2 = 50;
console.log(+somar1 + somar2);

// Incremente o número 5 e retorne o seu valor incrementado
var numeroInc = 5;
console.log(++numeroInc);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso; // NaN (Not a Number)

console.log(pesoPorDois);
