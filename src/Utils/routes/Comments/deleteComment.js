import { displayErrorRequest } from '../../../Components/common/Form/ErrorRequest/ErrorRequest';
import { createConfirmPopup } from '../../../Components/common/Popup/ConfirmPopup/ConfirmPopup';
import { displayAllComments } from '../../../Components/sections/MovieDetails/Comments/Comments/Comments';

import { API } from '../../API/API';

import { getMovieById } from '../Movies/getMovieById';
import { getUserById } from '../User/getUserById';

export const deleteComment = async ({ comment, movie }) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const user = JSON.parse(localStorage.getItem('user'));

  //le paso el id del comment que quiero eliminar
  const res = await API({
    endpoint: `/comments/${comment._id}`,
    method: 'DELETE',
    token: token
  });

  const fatherPopup = document.querySelector('.confirmDelete');

  if (res.comment) {
    console.log('eliminado');
    //elimino el popup de "estar seguro de que quieres eliminar?"
    document.querySelector('.confirmDelete')?.remove();

    const confirmPopup = createConfirmPopup({
      texto: 'Comentario eliminado correctamente!',
      button: true
    });

    if (movie) {
      //quiere decir que estamos en la pagina de movie details, entonces pintamos de nuevo los comments del movie
      const divFather = document.querySelector('.contentSimAndComm');
      confirmPopup.addEventListener('click', async () => {
        //pesco de nuevo el movie actualizado, para que se pinte sin el comentario eliminado
        const movieUpdate = await getMovieById(movie._id);
        displayAllComments(divFather, movieUpdate);
        //si quien ha comentado es el user, lo actualizo, para eliminarle el comment de la lista
        const userUpdate = await getUserById(user._id);
        localStorage.setItem('user', JSON.stringify(userUpdate));
      });
      divFather.append(confirmPopup);
    } else {
      //quiere decir que estamos en la pagina de user / mis comentarios. Entonces pinto los comentarios del user
      const divFather = document.querySelector('.userComments');
      confirmPopup.addEventListener('click', async () => {
        //obtengo de nuevo el user para pintar sus comentarios actualizados
        const userUpdate = await getUserById(user._id);
        localStorage.setItem('user', JSON.stringify(userUpdate));

        //ERROR en llamar displayUsercomments:
        /* Uncaught ReferenceError: Cannot access 'displayUserComments' before initialization */
        /* creo una dependencia circular: UserComments → createDeleteButt → ConfirmDeletePopup → deleteComment → UserComments
        Para evitar este error uso await import, para cargar la funcion dinamicamente solo cuando la necesito, evitando la carga anticipada del modulo */
        const { displayUserComments } = await import(
          '../../../Components/sections/User/UserComments/UserComments.js'
        );
        displayUserComments(userUpdate);
      });
      divFather.append(confirmPopup);
    }
  } else {
    displayErrorRequest({ father: fatherPopup, error: res.message });
  }
};
