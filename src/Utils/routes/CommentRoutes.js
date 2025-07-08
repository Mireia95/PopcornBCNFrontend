import { API } from '../API/API';

//delete comment
export const deleteComment = async ({ comment }) => {
  const token = JSON.parse(localStorage.getItem('token'));

  //le paso el id del comment que quiero eliminar
  const response = await API({
    endpoint: `/comments/${comment._id}`,
    method: 'DELETE',
    token: token
  });

  return response;
};

//post comment
export const postComment = async ({ event, user, movie }) => {
  const token = JSON.parse(localStorage.getItem('token'));

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
