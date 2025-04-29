import { API } from '../../API/API';

export const postComment = async ({ event, user, movie }) => {
  const token = JSON.parse(localStorage.getItem('token'));

  //el body tiene que recibir
  // user: consiguelo con local.storage
  //movie
  //cinema
  //text delcomment
  //stars
  //date
  //recogo la info que me llega del form
  const [cinema, version, stars, text] = event.target;
  const body = {
    user: user,
    movie: movie,
    cinema: cinema.value,
    version: version.value,
    text: text.value,
    stars: stars.value
  };

  await API({ endpoint: '/comments', method: 'POST', token: token, body });
};
