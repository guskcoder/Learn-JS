const nomes = ['Maria', 'João', 'Felipe', 'Isabel'];

// Remove o ultimo item
const ultimoItem = nomes.pop();
console.log(ultimoItem);

// Remove o primeiro item
const primeiroItem = nomes.shift();
console.log(primeiroItem);

// adicionar um item no inicio do meu array
nomes.unshift('Gustavo');
console.log(nomes);

// encontrar item na array
const item = nomes.indexOf('João');
console.log('Item Encontrado ' + item);
