import { loading } from '../../../common/Loading/Loading';
import './AdminOption.css';
import './AdminOptionResponsive.css';

export const createAdminOption = ({ title, text, buttonText, funcion }) => {
  const adminPage = document.querySelector('#admin');
  const divOptions = document.querySelector('.adminOptions');

  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const button = document.createElement('button');

  h3.innerText = title;
  p.innerText = text;
  button.innerText = buttonText;

  button.addEventListener('click', () => {
    divOptions.remove();
    loading(adminPage);
    funcion();
  });

  div.classList.add('flexCenter', 'adminOption');

  div.append(h3, p, button);

  divOptions.append(div);
};
