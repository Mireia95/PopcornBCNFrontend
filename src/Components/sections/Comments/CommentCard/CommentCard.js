import { defaultImages } from '../../../../Utils/Data/DefaultImages';
import { displayRatingStars } from '../../MovieDetails/Comments/RatingStars/createRatingStars';
import './CommentCard.css';
import './CommentCardResponsive.css';

export const createCommentCard = ({ comment }) => {
  const article = document.createElement('article');
  article.classList.add('commentContainer');
  console.log(comment);
  //user
  const divUserAndDate = document.createElement('div');
  divUserAndDate.classList.add('commentUserAndDate', 'flexCenter');
  const userDiv = document.createElement('div');
  userDiv.classList.add('flexCenter', 'commentUser');
  userDiv.innerHTML = `<img src=${
    comment.user?.image ? comment.user.image : defaultImages.user
  } alt="user image"/> <h4> ${
    comment.user?.username ? comment.user.username : 'Usuario eliminado'
  }</h4>`;

  // Creo la fecha del comentario
  const date = new Date(comment.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const pDate = document.createElement('p');
  pDate.innerText = date;
  pDate.classList.add('date');

  //cine y version
  const divCineAndVersion = document.createElement('div');
  divCineAndVersion.classList.add('commentInfo', 'flexCenter');
  const commentCine = document.createElement('p');
  commentCine.innerText = comment.cinema;
  divCineAndVersion.append(commentCine);

  //Creo version
  if (comment.version) {
    const commentVersion = document.createElement('p');
    commentVersion.innerText = comment.version;
    divCineAndVersion.append(commentVersion);
  }

  //Rating:
  //tengo que crear 5 estrellas. Cuantas estrellas tiene el comment?
  //dependiendo de cuantas tiene relleno la imagen estrella de amarillo, si no grises
  //creo una función
  const stars = displayRatingStars(comment);

  const commentText = document.createElement('p');
  commentText.innerText = comment.text;

  divUserAndDate.append(userDiv, pDate);

  article.append(divUserAndDate, divCineAndVersion, stars, commentText);

  return article;
};
