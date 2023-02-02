// o que é um objeto?
// new Object();

var caneta = new Object();

caneta.cor = 'azul';
caneta.marca = 'Bic';
caneta.dimensao = '6cm';

var canetaPreta = new Object();
canetaPreta.cor = 'Preta';
canetaPreta.marca = 'Bic';
canetaPreta.dimensao = '8cm';

// console.log(caneta);
// console.log(canetaPreta);

// criando utilizando função

function Caneta(cor, marca, dimensao) {
  this.cor = cor;
  this.marca = marca;
  this.dimensao = dimensao;
}

var novaCanetaPreta = new Caneta();
novaCanetaPreta.cor = 'Preta';
novaCanetaPreta.marca = 'Bic';
novaCanetaPreta.dimensao = '10cm';

var novaCanetaAzul = new Caneta();
novaCanetaAzul.cor = 'Azul';
novaCanetaAzul.marca = 'Bic';
novaCanetaAzul.dimensao = '15cm';

// console.log(novaCanetaPreta);
// console.log(novaCanetaAzul);

var novaCanetaRosa = {
  cor: 'Rosa',
  marca: 'Bic',
  dimensal: '10cm',
};

// console.log({ novaCanetaRosa });

// Object.create()

var prototipoCaneta = {
  cor: 'Marrom',
  marca: 'Bic',
  dimensao: '10cm',
  imprimir() {
    console.log(this.cor, this.marca, this.dimensao);
  },
};

var novaCanetaComPrototipo = Object.create(prototipoCaneta);
novaCanetaComPrototipo.cor = 'Amarela';
novaCanetaComPrototipo.marca = 'Bic';
novaCanetaComPrototipo.dimensao = '18cm';

novaCanetaComPrototipo.imprimir();
