// IF - ELSE - ELSE IF - SWITCH

const usuarioIdade = 17;
// se o usuario for maior que 18 mostre a mensagem maior que 18

if (usuarioIdade >= 18) {
  console.log('Usuário Maior que 18');
} else if (usuarioIdade == 7) {
  console.log('Usuário Vai Estudar');
} else {
  console.log('Usuário Menor de idade');
}

// Switch - Case

const mes = 12;

switch (mes) {
  case 1:
    console.log('Mês é Janeiro');
    break;
  case 2:
    console.log('Mês é Fevereiro');
    break;
  case 3:
    console.log('Mês é Março');
    break;
  default:
    console.log('Outro Mês');
    break;
}
