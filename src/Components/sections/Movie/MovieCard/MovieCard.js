import { displayMovieDetails } from '../../../../Pages/MovieDetails/MovieDetails';
import { defaultImages } from '../../../../Utils/Data/DefaultImages';
import { addImage } from '../../../../Utils/functions/addImage';
import { getMovies } from '../../../../Utils/routes/Movies/getMovies';

import { createEditButt } from '../../../common/Button/EditButton/EditButton';
import { addListButton } from '../../../common/Button/AddListButton/AddListButton';

import { createNewMovieCard } from '../NewMovieCard/NewMovieCard';
import './MovieCard.css';
import { editMovieForm } from '../Form/EditMovieForm/EditMovieForm';
import { createForm } from '../../../common/Form/CreateForm/CreateForm';

//creamos las cards
export const createMovieCard = ({ father, movie }) => {
  const moviesPage = document.getElementById('movies');
  const article = document.createElement('article');
  article.className = 'movieCard';

  const poster = addImage(movie.name, movie.image || defaultImages.movieImage);

  const divInfoMovie = document.createElement('div');

  const divSubInfoMovie = document.createElement('div');
  divSubInfoMovie.classList.add('flexCenter');

  const year = document.createElement('p');
  year.innerText = `${movie.year}`;

  const divState = document.createElement('div');
  divState.classList.add('flexCenter', 'state');

  const stateImg = document.createElement('img');
  stateImg.alt = 'estado';

  const state = document.createElement('p');
  state.innerText = movie.state;

  switch (movie.state[0]) {
    case 'Disponible':
      stateImg.src =
        'https://res.cloudinary.com/dr2vohk2z/image/upload/v1736442566/PopcornBCN/disponible_rafbsg.png';
      break;
    case 'No disponible':
      stateImg.src =
        'https://res.cloudinary.com/dr2vohk2z/image/upload/v1736442624/PopcornBCN/NoDisponible_xgvskq.png';
      break;
    case 'Próximamente':
      stateImg.src =
        'https://res.cloudinary.com/dr2vohk2z/image/upload/v1736442734/PopcornBCN/Proximamente_scbeq4.png';
      break;
  }

  divSubInfoMovie.append(divState, year);
  divState.append(stateImg, state);

  divInfoMovie.append(divSubInfoMovie);
  //crea div que sale al :hover del article para que puedas hacer click
  const hoverInfo = document.createElement('div');
  hoverInfo.innerHTML = '<p> Ver info </p>';
  hoverInfo.classList.add('hoverInfo');
  hoverInfo.addEventListener('click', () => {
    console.log('ver info peli');
    displayMovieDetails(movie);
  });

  //creo button para añadir el movie a la lista del user
  const listButt = addListButton({
    father: article,
    movie: movie
  });

  article.append(poster, hoverInfo, divInfoMovie, listButt);

  const user = JSON.parse(localStorage.getItem('user')); //chequeo si el user es admin
  if (user && user.role === 'admin') {
    //creo button editar para los admins
    const editButt = createEditButt();
    editButt.addEventListener('click', () => {
      //llamo a la funcion editForm general, que llamarà a su vez editMovieForm
      const editForm = createForm({
        funcion: editMovieForm,
        element: movie,
        title: 'Editar película'
      });
      moviesPage.append(editForm);
    });
    article.append(editButt);
  }
  father.append(article);
};

//obtenemos las cards
export const getMoviesCards = async ({ father, genre = '', state = '' }) => {
  const response = await getMovies();

  //si eres admin pinto la card para añadir el movie
  const user = JSON.parse(localStorage.getItem('user')); //recupero user logueado
  if (user?.role === 'admin') {
    const addMovieCard = createNewMovieCard();
    father.append(addMovieCard);
  }

  //por cada pelicula creo una card
  //si le paso el genre entonces filtro solo las pelis con ese genre
  for (const movie of response) {
    //!CHECK
    console.log(genre);
    console.log(state);
    const filterGenres =
      genre === 'Todos' ||
      genre === '' ||
      genre === 'GÉNERO' ||
      movie.genre.includes(genre);
    const filterState =
      state === 'Todos' ||
      state === '' ||
      state === 'ESTADO' ||
      movie.state.includes(state);

    if (filterGenres && filterState) {
      createMovieCard({ father: father, movie: movie });
    }
  }

  const loading = document.querySelector('.loading');
  if (loading) {
    loading.remove();
  }
  window.scrollTo(0, 0); //para que se recargue la pagina al comienzo, y no haga scroll
};
