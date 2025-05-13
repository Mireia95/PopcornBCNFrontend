import { deleteCinema } from '../../../../Utils/routes/Cinemas/deleteCinema';
import { deleteComment } from '../../../../Utils/routes/Comments/deleteComment';
import { deleteMovie } from '../../../../Utils/routes/Movies/deleteMovie';
import { deleteScreening } from '../../../../Utils/routes/Screenings/deleteScreening';
import { createButton } from '../../Button/GenericButton/Button';

import './ConfirmDeletePopup.css';

export const ConfirmDeletePopup = ({ textConfirm, element }) => {
  console.log(element);
  //el element que recibe por prop tiene que ser un objeto, por ejemplo:
  //element: {user: user}. En este caso puedo con un switch/case entender que le estoy pasando a element (si user, si movie, si screening, si comment)

  const divConfirmDelete = document.createElement('div');

  const h4 = document.createElement('h4');
  h4.innerText = `Estás seguro de que quieres eliminar ${textConfirm}?`;

  const divButt = document.createElement('div');

  divConfirmDelete.classList.add('flexCenter', 'confirmDelete');
  divButt.classList.add('flexCenter');

  const buttCancel = createButton({ texto: 'Cancelar', clase: 'cancel' });
  const buttConfirm = createButton({ texto: 'Eliminar', clase: 'delete' });

  buttCancel.addEventListener('click', () => {
    divConfirmDelete.remove();
  });

  buttConfirm.addEventListener('click', async () => {
    //uso el switch para saber que le he pasado como element, y ejecutar la funcion correcta segun el elemento que deseo eliminar
    switch (true) {
      case 'user' in element:
        const { deleteUser } = await import(
          '../../../../Utils/routes/User/deleteUser'
        );
        await deleteUser(element.user);
        break;
      case 'cinema' in element:
        await deleteCinema(element.cinema);
        break;
      case 'comment' in element:
        if (element.movie) {
          await deleteComment({
            comment: element.comment,
            movie: element.movie
          });
          break;
        } else {
          await deleteComment({ comment: element.comment });
          break;
        }
      case 'screening' in element:
        console.log('es screening');
        await deleteScreening({
          screening: element.screening,
          movie: element.movie
        });
        break;
      case 'movie' in element:
        console.log('es movie');
        await deleteMovie(element.movie);

        break;
      default:
        console.log('especificar que elemento quieres eliminar');
    }
  });

  divButt.append(buttCancel, buttConfirm);

  divConfirmDelete.append(h4, divButt);

  const main = document.querySelector('main');
  main.append(divConfirmDelete);
};
