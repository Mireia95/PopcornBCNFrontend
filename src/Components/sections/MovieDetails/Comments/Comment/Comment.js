import { createDeleteButt } from '../../../../common/Button/DeleteButton/DeleteButton';
import { createCommentCard } from '../../../Comments/CommentCard/CommentCard';

import './Comment.css';

//funcion para crear el div del comment
export const displayComment = ({ comment, movie }) => {
  //creo el article con el comment
  const article = createCommentCard({ comment: comment });

  //si user.role = "admin" : creo divComment que tendrà article + boton delete
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.role === 'admin') {
    const divComment = document.createElement('div');
    const divButt = document.createElement('div');
    divButt.classList.add('adminDivButt');
    const deleteButt = createDeleteButt({
      textButt: 'comentario',
      textConfirm: 'este comentario',
      element: { comment: comment, movie: movie }
    });
    divButt.append(deleteButt);
    article.append(divButt);
    divComment.append(article);
    return divComment;
  } else {
    return article;
  }
};
