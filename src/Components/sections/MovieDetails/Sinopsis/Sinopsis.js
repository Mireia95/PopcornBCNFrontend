import './Sinopsis.css';

export const displaySinopsis = (father, movie) => {
  father.innerHTML = ''; //clean element
  const p = document.createElement('p');
  p.classList.add('sinopsis');
  if (movie.description) {
    p.innerText = movie.description;
  }
  father.append(p);
};
