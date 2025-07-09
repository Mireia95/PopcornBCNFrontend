import { createBackButton } from '../../../common/Button/BackButton/BackButton';
import { createDeleteButt } from '../../../common/Button/DeleteButton/DeleteButton';
import { createCommentCard } from '../../Comments/CommentCard/CommentCard';
import { displayUserOptions } from '../UserOptions/UserOptions';

import './UserComments.css';
import './UserCommentsResponsive.css';

export const displayUserComments = (user) => {
  const userPage = document.getElementById('user');
  const divOptionContent = document.querySelector('.divOptionsContent');
  divOptionContent.innerHTML = '';
  const divComments = document.createElement('div');
  divComments.classList.add('userComments');
  const title = document.createElement('h3');
  title.innerText = 'Mis comentarios';
  divComments.append(title);

  console.log(user.comments);

  if (user.comments.length > 0) {
    for (const comment of user.comments) {
      const divComment = document.createElement('div');
      divComment.classList.add('divComment');
      //añado titulo y poster
      const titleMovie = document.createElement('h4');
      titleMovie.innerText = comment.movie.name;

      const divCommCard = document.createElement('div');
      const poster = document.createElement('div');
      poster.innerHTML = `<img src=${comment.movie.image} alt=${comment.movie.name}/> `;

      const commentCard = createCommentCard({ comment: comment });

      const divButt = document.createElement('div');
      divButt.classList.add('divButt');
      const deleteButt = createDeleteButt({
        textButt: 'comentario',
        textConfirm: 'este comentario',
        element: { comment: comment }
      });
      divButt.append(deleteButt);

      commentCard.append(divButt);
      divCommCard.append(poster, commentCard);
      divComment.append(titleMovie, divCommCard);
      divComments.append(divComment);
    }
  } else {
    const noComments = document.createElement('p');
    noComments.innerText =
      'Ups... Todavía no hay comentarios. Echa un vistazo a las películas y cuentanos que opinas!';
    noComments.className = 'noComments';
    divComments.append(noComments);
  }

  divOptionContent.append(divComments);

  if (!document.querySelector('.backButton')) {
    const backButt = createBackButton({
      clean: '.divOptionsContent',
      funcion: () => displayUserOptions(user),
      header: false,
      logo: false
    });

    userPage.append(backButt);
  }
};
