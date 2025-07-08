import './ErrorRequest.css';

export const displayErrorRequest = ({ father, error }) => {
  console.log(error);
  let pError = document.querySelector('.errorRequest'); //busco si ya está el <p> de error
  if (pError) {
    pError.remove(); //en cualquier caso mejor borrarlo y volverlo a pintar, por si es otro error diferente al anterior (como puede pasar en Register)
  }

  //pintamos el error nuevo
  const pNewError = document.createElement('p');
  pNewError.classList.add('errorRequest');
  pNewError.innerText = error.message;
  father.append(pNewError);
};
