import { getCinemas } from '../../../../Utils/routes/Cinemas/getCinemas';
import { createCinemaCard } from '../CinemaCard/CinemaCard';
import { createNewCine } from '../NewCinema/NewCinema';
import './cinemasList.css';

export const displayCinemas = async (section) => {
  //al hacer una peticion de cine estoy llamando de nuevo esta funcion para pintar los cines de nuevo. Para evitar que se pinten duplicados, si ya existen los borro para luego pintarlos otra vez actualizados

  document.querySelector('.cinemaList')?.remove();

  const cinemasList = document.createElement('div');
  cinemasList.classList.add('cinemaList');

  //if admin pinto div para añadir un nuevo cine
  const user = JSON.parse(localStorage.getItem('user')); //recupero user logueado
  if (user?.role === 'admin') {
    const addNewCine = createNewCine({ father: section });
    cinemasList.append(addNewCine);
  }

  const cines = await getCinemas();
  //pinto el cine
  for (const cine of cines) {
    const divCine = createCinemaCard(cine);
    cinemasList.append(divCine);
    section.append(cinemasList);
  }

  const loading = document.querySelector('.loading');
  if (loading) {
    loading.remove();
  }

  window.scrollTo(0, 0); //para que se recargue la pagina al comienzo, y no haga scroll
};
