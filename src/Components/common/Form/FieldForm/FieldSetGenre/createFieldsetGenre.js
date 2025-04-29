import { API } from '../../../../../Utils/API/API';
import { createinputForm } from '../InputForm/createInputForm';

import './createFieldsetGenre.css';

export const createFieldSetGenre = async ({ activedGenres }) => {
  const fieldset = document.createElement('fieldset');
  fieldset.classList.add('fieldset', 'flexCenter');
  const legend = document.createElement('legend');
  legend.innerHTML = 'Géneros';
  fieldset.append(legend);
  const generos = await API({ endpoint: '/movies/genres' }); //obtengo la lista de generos
  for (const genero of generos) {
    //chequeo si el genero está ya incluido en el movie
    //si si, lo dejaré ya checkeado
    const checked = activedGenres?.includes(genero) ? true : false;
    const checkbox = createinputForm({
      labelText: `${genero}`,
      type: 'checkbox',
      value: `${genero}`,
      name: 'genre',
      required: false,
      checked: checked ? checked : false
    });

    fieldset.append(checkbox);
  }

  return fieldset;
};
