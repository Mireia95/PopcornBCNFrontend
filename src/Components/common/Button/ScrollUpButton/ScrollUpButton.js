import { createButton } from '../GenericButton/Button';
import './ScrollUpButton.css';

export const createScrollUpButton = () => {
  //arrow para volver arriba
  const scrollUp = createButton({
    texto: 'Volver arriba',
    clase: 'scrollUp',
    url: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1739033151/PopcornBCN/arrowup_etfj5c.png'
  });

  scrollUp.addEventListener('click', () => {
    //para que se recargue la pagina al comienzo, y no haga scroll
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  return scrollUp;
};
