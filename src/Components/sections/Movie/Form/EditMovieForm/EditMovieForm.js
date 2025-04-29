import './EditMovieForm.css';

import { editMovie } from '../../../../../Utils/routes/Movies/editMovie';
import { createDeleteButt } from '../../../../common/Button/DeleteButton/DeleteButton';
import { createinputForm } from '../../../../common/Form/FieldForm/InputForm/createInputForm';
import { createInputFileForm } from '../../../../common/Form/FieldForm/InputFileForm/CreateInputFileForm';
import { createSelectOptions } from '../../../../common/Form/FieldForm/SelectOptions/createSelectOptions';
import { createFieldSetGenre } from '../../../../common/Form/FieldForm/FieldSetGenre/createFieldsetGenre';

export const editMovieForm = async ({ form, element }) => {
  console.log(element);
  const name = createinputForm({
    labelText: 'Nombre',
    placeholder: 'Nombre',
    value: element.name || ''
  });

  const director = createinputForm({
    labelText: 'Director',
    placeholder: 'Director',
    value: element.director || ''
  });

  const divImage = createInputFileForm({
    labelText: 'Poster',
    id: 'poster',
    image: element.image
  });

  divImage.classList.add('editImage');

  const posterBG = createInputFileForm({
    labelText: 'PosterBG',
    id: 'posterBG',
    image: element.posterBG
  });
  posterBG.classList.add('editImage');

  const country = createinputForm({
    labelText: 'País',
    placeholder: 'Country',
    value: element.country || ''
  });

  const originalLanguage = createinputForm({
    labelText: 'Idioma original',
    placeholder: 'Idioma...',
    value: element.originalLang || ''
  });

  const duration = createinputForm({
    labelText: 'Duración',
    placeholder: 'minutos',
    value: element.duration || ''
  });

  const year = createinputForm({
    labelText: 'Año',
    type: 'Number',
    placeholder: '',
    value: element.year || ''
  });

  const releaseDate = createinputForm({
    labelText: 'Fecha estreno',
    type: 'date',
    value: element.releaseDate.slice(0, 10) || ''
  });

  const state = createSelectOptions({
    selectName: 'Estado',
    options: ['Disponible', 'No disponible', 'Próximamente']
  });
  state.classList.add('fieldForm', 'stateForm');

  //description serà un textarea
  const description = document.createElement('div');
  const label = document.createElement('label');
  label.innerText = 'Descripción';
  const textarea = document.createElement('textarea');
  textarea.name = 'description';
  textarea.value = element.description || '';

  description.append(label, textarea);
  description.classList.add('editDescription', 'fieldForm');

  const genres = await createFieldSetGenre({ activedGenres: element.genre });

  const trailer = createinputForm({
    labelText: 'Trailer',
    placeholder: 'Copia aquí el link del trailer...',
    value: element.trailer || '',
    id: 'trailer'
  });
  trailer.classList.add('trailerForm');

  form.append(
    name,
    director,
    divImage,
    posterBG,
    country,
    originalLanguage,
    duration,
    year,
    releaseDate,
    state,
    description,
    genres,
    trailer
  );

  //creo evento submit del form para enviar los datos
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await editMovie({ e: e, movie: element._id });
  });

  //paso element con nombre "movie" para pasarlo al boton delete
  const movie = element;

  //creo boton eliminar pelicula
  const deleteButt = createDeleteButt({
    textButt: 'película',
    textConfirm: 'esta película',
    element: { movie }
  });

  const divForm = document.querySelector('.form');
  divForm.append(deleteButt);
};
