function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  let newLi = document.createElement('li');
  newLi.innerText = 'Item adicionado';

  ul.after(newLi);

  // after = depois
  // before = antes

  // // Adicionar no Incio
  // ul.prepend(newLi);
  // // Adicionar no final
  // ul.append(newLi);
}
