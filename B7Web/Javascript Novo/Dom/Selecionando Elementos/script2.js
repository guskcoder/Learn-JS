let input = document.querySelector('input');
const teste = document.querySelector('#teste');

function handleKeyUp(e) {
  if (e.key == 'Enter') {
    const ul = teste.querySelector('ul');

    let newLi = document.createElement('li');
    newLi.innerText = input.value;

    ul.prepend(newLi);
    input.value = '';
  }
}

input.addEventListener('keydown', handleKeyUp);
