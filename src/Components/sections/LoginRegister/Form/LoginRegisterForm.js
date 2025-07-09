import { createinputForm } from '../../../common/Form/FieldForm/InputForm/createInputForm';

import './LoginRegisterForm.css';
import './LoginRegisterFormResponsive.css';
import { doRegister } from '../Register/Register';
import { doLogin } from '../Login/Login';
import { createButton } from '../../../common/Button/GenericButton/Button';
import { createInputPassword } from '../../../common/Form/FieldForm/InputPassword/createInputPassword';
import { loading } from '../../../common/Loading/Loading';
import { trimValueForm } from '../../../../Utils/functions/formTrimValue';

export const LoginRegisterForm = (father, typeForm) => {
  father.innerHTML = ''; //limpio el elemento padre
  //le pasamos como parametro typeForm para saber si crear Login o Resiter

  const h2 = document.createElement('h2');
  h2.innerText = typeForm; //le paso Login o Crear cuenta

  const form = document.createElement('form');
  form.classList.add('flexCenter', 'loginRegister');

  const username = createinputForm({
    labelText: 'Username',
    placeholder: 'Username'
  });

  const password = createInputPassword();

  const buttonSubmit = createButton({
    texto: typeForm,
    type: 'submit',
    clase: 'loginButton'
  }); //creo button submit del form

  form.append(username);

  //si typeForm = "Crear cuenta", añado el input del email
  if (typeForm === 'Crear cuenta') {
    const name = createinputForm({
      labelText: 'Nombre',
      placeholder: 'Nombre'
    });
    const surname = createinputForm({
      labelText: 'Apellido',
      placeholder: 'Apellido'
    });
    const email = createinputForm({
      labelText: 'Email',
      placeholder: 'ejemplo@gmail.com'
    });
    form.append(name, surname, email);
  }

  form.append(password, buttonSubmit);

  //chequeo si el user ya está logueado
  const user = JSON.parse(localStorage.getItem('user'));
  if (typeForm !== 'Crear cuenta' && user) {
    const h4 = document.createElement('h4');
    h4.innerText = 'Hola user 👋 ya estás logueado.';
    father.append(h2, h4);
  } else {
    father.append(h2, form);
  }

  //creo div para cambiar de form Login/Crear cuenta
  const divChangeForm = document.createElement('div');
  divChangeForm.classList.add('changeForm', 'flexCenter');

  const p = document.createElement('p');
  p.textContent =
    typeForm === 'Login' ? 'No tienes una cuenta?' : 'Tienes ya una cuenta?';

  const aChangeForm = document.createElement('a');
  aChangeForm.textContent = typeForm === 'Login' ? 'Registrate' : 'Login';
  aChangeForm.href = '#loginUser';

  aChangeForm.addEventListener('click', (e) => {
    if (typeForm === 'Login') {
      LoginRegisterForm(father, 'Crear cuenta'); //cambiamos a Crear cuenta
    } else {
      LoginRegisterForm(father, 'Login'); //cambiamos a Login
    }
  });

  //evento para el form
  form.addEventListener('submit', (e) => {
    trimValueForm(form);
    loading(form);
    if (typeForm === 'Crear cuenta') {
      doRegister(e);
    } else {
      doLogin({ e });
    }
  });

  divChangeForm.append(p, aChangeForm);

  father.append(divChangeForm);
};
