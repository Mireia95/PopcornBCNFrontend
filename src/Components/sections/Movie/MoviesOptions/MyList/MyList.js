import { loading } from '../../../../common/Loading/Loading';
import { createDoLoginPopUp } from '../../../../common/Popup/DoLogin/DoLoginPopUp';
import { createMovieCard, getMoviesCards } from '../../MovieCard/MovieCard';

import './MyList.css';

//funcion que me permite filtrar las películas enseñando solo las que tengo en mi lista
export const getMyList = () => {
  const myListButt = document.createElement('button');
  const myListIcon = document.createElement('img');
  myListIcon.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1741722240/PopcornBCN/MYLIST_stteoh.png';

  myListButt.className = 'myListButt';

  myListButt.append(myListIcon);
  myListButt.append('VER MI LISTA');

  //recupero el user para saber cuales películas ha marcado en su lista
  myListButt.addEventListener('click', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const moviesCardsDiv = document.querySelector('.moviesCards');

    //si el user NO está logueado, pinta un popup que digire a la pagina Mi Cuenta para hacer el login
    if (!user) {
      const divDoLogin = createDoLoginPopUp();
      const main = document.querySelector('main');
      main.append(divDoLogin);
    } else {
      myListButt.innerHTML = ''; //limpiamos el button para actualizarlo
      //si tenemos el user logueado:
      moviesCardsDiv.innerHTML = ''; //limpiamos el div con los movies
      //si estabamos en myList:
      if (myListButt.classList.contains('myListActive')) {
        myListButt.classList.remove('myListActive');
        //actualiza la imagen
        myListIcon.src =
          'https://res.cloudinary.com/dr2vohk2z/image/upload/v1741722240/PopcornBCN/MYLIST_stteoh.png';
        myListButt.append(myListIcon);
        myListButt.append('VER MI LISTA');
        //display all movies
        const divAllCards = document.querySelector('.moviesCards');
        loading(divAllCards);
        getMoviesCards({ father: divAllCards });
      } else {
        //añade la clase myListActive
        myListButt.classList.add('myListActive');
        //actualiza la imagen
        myListIcon.src =
          'https://res.cloudinary.com/dr2vohk2z/image/upload/v1741293797/PopcornBCN/added_knoglk.png';
        myListButt.append(myListIcon);
        //cambia el texto en MI LISTA
        myListButt.append('MI LISTA');

        //pinta las peliculas que tienes en myList
        user.myList.forEach((movieList) => {
          createMovieCard({
            father: moviesCardsDiv,
            movie: movieList
          });
        });
      }
    }
  });

  return myListButt;
};
