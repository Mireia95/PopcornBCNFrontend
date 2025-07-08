import './createInputPassword.css';

export const createInputPassword = () => {
  const div = document.createElement('div');
  div.classList.add('fieldForm');
  const label = document.createElement('label');

  const divInput = document.createElement('div');
  divInput.className = 'passwordInput';

  const input = document.createElement('input');
  label.textContent = 'Contaseña';
  input.placeholder = '******';
  input.type = 'password';
  input.minLength = 5;
  input.required = true;

  const icon = document.createElement('img');

  const icons = {
    hidden: {
      src: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1751972251/PopcornBCN/eyenot_btwnhn.png',
      alt: 'hidden password'
    },
    visible: {
      src: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1751972251/PopcornBCN/eyeYes_qumdeh.png',
      alt: 'visible password'
    }
  };

  //icon por defecto
  icon.src = icons.hidden.src;
  icon.alt = icons.hidden.alt;

  let showPassword = false;

  icon.addEventListener('click', () => {
    if (!showPassword) {
      showPassword = true;
      icon.src = icons.visible.src;
      icon.alt = icons.visible.alt;
      input.type = 'text';
    } else {
      showPassword = false;
      icon.src = icons.hidden.src;
      icon.alt = icons.hidden.alt;
      input.type = 'password';
    }
  });

  divInput.append(input, icon);
  div.append(label, divInput);
  return div;
};
