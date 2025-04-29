import './Search.css';

export const createSearch = () => {
  const divSearch = document.createElement('div');
  divSearch.classList.add('flexCenter', 'search');
  const img = document.createElement('img');
  img.alt = 'search';
  img.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735904130/PopcornBCN/Searchwhite_camwlr.png';

  const input = document.createElement('input');
  input.id = 'search';
  input.placeholder = 'Busca una película';
  input.type = 'search';

  //!input = getMovieById

  divSearch.append(img, input);

  return divSearch;
};
