import { displayErrorRequest } from '../../../Components/common/Form/ErrorRequest/ErrorRequest';
import { loading } from '../../../Components/common/Loading/Loading';
import { getMoviesCards } from '../../../Components/sections/Movie/MovieCard/MovieCard';
import { createConfirmPopup } from '../../../Components/common/Popup/ConfirmPopup/ConfirmPopup';
import { API } from '../../API/API';

export const deleteMovie = async (movie) => {
  const token = JSON.parse(localStorage.getItem('token'));
  //le paso el id del comment que quiero eliminar
  const res = await API({
    endpoint: `/movies/${movie._id}`,
    method: 'DELETE',
    token: token
  });

  const fatherPopup = document.querySelector('.confirmDelete');

  if (res.deletedMovie) {
    console.log('eliminado');
    document.querySelector('.editForm')?.remove();
    const confirmPopup = createConfirmPopup({
      texto: 'Película eliminada correctamente!',
      button: true
    });

    fatherPopup.innerHTML = '';
    fatherPopup.append(confirmPopup);

    confirmPopup.addEventListener('click', async () => {
      //elimino el popup
      fatherPopup.remove();
      //pinto de nuevo la lista de peliculas
      const divFather = document.querySelector('.moviesCards');
      divFather.innerHTML = '';
      loading(divFather);
      await getMoviesCards({ father: divFather });
    });
  } else {
    displayErrorRequest({ father: fatherPopup, error: res.message });
  }
};
