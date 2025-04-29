import { displayComment } from '../Comment/Comment';
import { addNewComment } from '../NewComment/NewComment';
import './Comments.css';

//funcion para enseñar todos los comments
export const displayAllComments = async (father, movie) => {
  //chequeo si está pintado el popup de confirmacion de haber eliminado un comentario. Si está lo borramos
  document.querySelector('.confirmDelete')?.remove();
  father.innerHTML = ''; //clean element
  await addNewComment({ father: father, movie: movie }); //añado nuevo comment
  //pinto los comments
  for (const comment of movie.comments) {
    const commentContainer = displayComment({ comment: comment, movie: movie });
    father.append(commentContainer);
  }
};
