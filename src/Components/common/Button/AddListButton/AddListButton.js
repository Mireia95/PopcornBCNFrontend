import './AddListButton.css';
import '../../../Styles/Anims/Anims.css';

import { buttAddList } from '../../../../Utils/Data/ButtonAddListMovie';

import { editUser } from '../../../../Utils/routes/User/editUser';
import { createDoLoginPopUp } from '../../Popup/DoLogin/DoLoginPopUp';

//button para añadir una película en la lista del user
export const addListButton = ({ father, movie, texto = false }) => {
  //creo el button addList
  const addListButton = document.createElement('button');
  addListButton.classList.add('addListButt');
  const iconAddList = document.createElement('img');
  iconAddList.src = buttAddList[0].img;
  addListButton.append(iconAddList);
  //si estamos en la pagina de info del movie, le paso el texto:
  if (texto) {
    addListButton.append(buttAddList[0].texto);
  }

  //chequear si hay user. Si hay, hay que actualizar los buttons de las pelis en myList
  const user = JSON.parse(localStorage.getItem('user')); //chequeo si el user está logueado
  if (user) {
    //estamos logueados:
    //chequeo si myList incluye el movie pasado por props
    const movieInMyList = user.myList.some(
      (pelicula) => pelicula._id === movie._id
    );
    //si el movie está en la lista actualizo el button
    if (movieInMyList) {
      addListButton.innerHTML = ''; //limpio el button
      iconAddList.src = buttAddList[1].img; //pinto el ✔
      addListButton.classList.add('added');
      addListButton.append(iconAddList);

      //si estamos en la pagina de info del movie, le paso el texto:
      if (texto) {
        addListButton.append(buttAddList[1].texto);
      }
    }
  }

  //evento al hacer click
  addListButton.addEventListener('click', async () => {
    if (!user) {
      const divDoLogin = createDoLoginPopUp();
      const main = document.querySelector('main');
      main.append(divDoLogin);
    } else {
      //si tenemos el ✔ button, lo cambiamos a ➕
      if (addListButton.classList.contains('added')) {
        addListButton.innerHTML = '';
        iconAddList.src = buttAddList[0].img;
        addListButton.classList.remove('added');
        addListButton.append(iconAddList);
        if (texto) {
          addListButton.append(buttAddList[0].texto);
        }
      } else {
        //si tenemos el ➕ button, lo cambiamos a ✔ (pelicula añadida a myList)
        addListButton.innerHTML = '';
        iconAddList.src = buttAddList[1].img;
        addListButton.classList.add('added');
        addListButton.append(iconAddList);
        if (texto) {
          addListButton.append(buttAddList[1].texto);
        }

        // creo popup que confirma en la card que la pelicula ha sido añadida a myList
        //chequeo que antes no haya uno, si hay lo elimino
        document.querySelector('.confirmAddList')?.remove();
        const pConfirm = document.createElement('p');
        pConfirm.classList.add('confirmAddList', 'fadeInOut');
        pConfirm.innerText = 'Película añadida a tu lista.';
        father.append(pConfirm);
        //elimino el pConfirm despues de 4 segundos
        setTimeout(() => {
          pConfirm.remove();
        }, 4000);
      }

      //actualizamos myList del user en el backend
      const body = {
        myList: [movie._id]
      };
      //si añadimos la peli, la añadirà. Si la queremos quitar de la lista, la quitarà
      await editUser({ body: body, isJson: true, popup: false });
    }
  });
  return addListButton;
};
