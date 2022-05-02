function areaQuadrado(lado) {
  return lado * lado;
}

// console.log(areaQuadrado(5));

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

// console.log(imc(84, 1.71));

function corFavorita(cor) {
  if (cor === 'Azul') {
    return 'Eu Gosto do Céu';
  } else if (cor === 'Verde') {
    return 'Eu Gosto de Mato';
  } else {
    return 'Eu não gosto de Cores';
  }
}

addEventListener('click', function () {
  console.log('Oi');
});

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

// imc2(80, 1.8); // retorna o imc
// console.log(imc2(80, 1.8)); // retorna o imc e undefined

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Por favor digite um número';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(60));
