import { trimValueForm } from '../../../../../Utils/functions/formTrimValue';
import { postMovie } from '../../../../../Utils/routes/Movies/postMovie';
import { createFieldSetGenre } from '../../../../common/Form/FieldForm/FieldSetGenre/createFieldsetGenre';

import { createInputFileForm } from '../../../../common/Form/FieldForm/InputFileForm/CreateInputFileForm';
import { createinputForm } from '../../../../common/Form/FieldForm/InputForm/createInputForm';
import { createSelectOptions } from '../../../../common/Form/FieldForm/SelectOptions/createSelectOptions';

export const addMovieForm = async ({ form }) => {
  const name = createinputForm({
    labelText: 'Nombre',
    placeholder: 'Nombre',
    value: ''
  });

  const director = createinputForm({
    labelText: 'Director',
    placeholder: 'Director',
    value: ''
  });

  const divImage = createInputFileForm({
    labelText: 'Poster',
    id: 'image',
    required: false
  });

  divImage.classList.add('editImage');

  const posterBG = createInputFileForm({
    labelText: 'PosterBG',
    id: 'posterBG',
    required: false
  });
  posterBG.classList.add('editImage');

  const country = createinputForm({
    labelText: 'País',
    placeholder: 'Country',
    required: false
  });

  const originalLanguage = createinputForm({
    labelText: 'Idioma original',
    placeholder: 'Idioma...',
    required: false
  });

  const duration = createinputForm({
    labelText: 'Duración',
    placeholder: 'minutos',
    required: false
  });

  const year = createinputForm({
    labelText: 'Año',
    type: 'Number',
    placeholder: '',
    required: false
  });
  const releaseDate = createinputForm({
    labelText: 'Fecha estreno',
    type: 'date',
    required: false
  });

  const state = createSelectOptions({
    selectName: 'Estado',
    options: ['Disponible', 'No disponible', 'Próximamente']
  });
  state.classList.add('fieldForm', 'stateForm');

  //description serà un textarea
  const description = document.createElement('div');
  description.innerHTML = `<label> Descripción </label> <textarea name="description"> </textarea>`;
  description.classList.add('editDescription', 'fieldForm');

  const trailer = createinputForm({
    labelText: 'Trailer',
    placeholder: 'Copia aquí el link del trailer...',
    id: 'trailer',
    required: false,
    value: ''
  });

  const genres = await createFieldSetGenre({});

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
    trailer,
    genres
  );

  //creo evento submit del form para enviar los datos
  form.addEventListener('submit', async (e) => {
    trimValueForm(form);
    e.preventDefault();
    await postMovie(e);
  });
};
