import { getCinemas } from '../../../../Utils/routes/Cinemas/getCinemas';

import { createDeleteButt } from '../../../common/Button/DeleteButton/DeleteButton';

import { createinputForm } from '../../../common/Form/FieldForm/InputForm/createInputForm';
import { createSelectOptions } from '../../../common/Form/FieldForm/SelectOptions/createSelectOptions';
import { editScreening } from '../../../../Utils/routes/Screenings/editScreening';

import './ScreeningForm.css';
import { postScreening } from '../../../../Utils/routes/Screenings/postScreening';
import { trimValueForm } from '../../../../Utils/functions/formTrimValue';

/* esta funcion sirve para peticiones de post y put del screening. 
en el prop element le paso el movie, el screening (por si hay que editarlo) y la action
la action puede ser:
- "add": peticion post
- "edit": peticion put (editamos el screening) */
export const getScreeningForm = async ({
  form,
  element = {
    action: 'add'
  }
}) => {
  //renombro datos de element, para comodidad
  const screening = element.screening;
  const movie = element.movie;
  const action = element.action;

  const movieId = createinputForm({
    type: 'hidden',
    value: movie._id,
    name: 'movie'
  });

  const cinemasList = await getCinemas();

  const cinemasNames = [];
  for (const cinema of cinemasList) {
    cinemasNames.push(cinema.name);
  }

  const cinema = createSelectOptions({
    selectName: 'Cinema',
    options: cinemasNames,
    selected: screening?.cinema ? screening.cinema.name : null
  });

  const versionDiv = document.createElement('div');
  versionDiv.classList.add('addVersion', 'fieldForm');
  versionDiv.innerHTML = `
  <label for="version">Versiones:</label>
  <div id="versionInputs">
        <input type="text" name="versionInput1" placeholder="Añadir versión" value="${
          screening?.version[0] ? screening.version[0] : ''
        }">
        <input type="text" name="versionInput2" placeholder="Añadir versión" value="${
          screening?.version[1] ? screening.version[1] : ''
        }">
        <input type="text" name="versionInput3" placeholder="Añadir versión" value="${
          screening?.version[2] ? screening.version[2] : ''
        }">
        <input type="text" name="versionInput4" placeholder="Añadir versión" value="${
          screening?.version[3] ? screening.version[3] : ''
        }">
        <input type="text" name="versionInput5" placeholder="Añadir versión" value="${
          screening?.version[4] ? screening.version[4] : ''
        }">
  </div>`;

  const price = createinputForm({
    labelText: 'Precio',
    placeholder: 'Precio billete en €',
    name: 'price',
    value: screening?.price ? screening.price : ''
  });
  price.classList.add('screenAddPrice');

  const link = createinputForm({
    labelText: 'Link web cine',
    placeholder: 'Copia aquí la URL de la web del cine...',
    name: 'link',
    value: screening?.link ? screening.link : ''
  });

  form.append(movieId, cinema, versionDiv, price, link);

  if (action === 'edit') {
    //creo boton eliminar pelicula
    //recuper el screening para pasarselo como element

    const deleteButt = createDeleteButt({
      textButt: 'sesión',
      textConfirm: 'esta sesión',
      element: { screening, movie }
    });

    document.querySelector('.form')?.append(deleteButt);
  }

  //creo evento submit del form para enviar los datos
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    trimValueForm(form);

    await handleSubmit(e, action, screening, movie);
  });
};

//funcion que permite recoger el body para enviar a la peticion
//dependiendo del action, haremos una peticion u otra
const handleSubmit = async (e, action, screening, movieFather) => {
  const { movie, cinema, price, link } = e.target;
  const allVersions = [];

  for (let i = 1; i <= 5; i++) {
    const versionInput = e.target[`versionInput${i}`]; //Accede al input, versionInput es el "name" que tiene el input en el form
    const version = versionInput?.value.trim(); // Obtiene su valor y elimina espacios

    if (version) {
      allVersions.push(version.toUpperCase()); // Convierte a mayúsculas y lo guarda en el array
    }
  }

  //subo elementos de la petición
  const body = {
    movie: movie.value,
    cinema: cinema.value,
    version: allVersions,
    price: price.value,
    link: link.value,
    screening: screening
  };

  if (action === 'edit') {
    console.log('editar el screening');
    await editScreening({
      screening: screening,
      body: body,
      movie: movieFather
    });
  } else {
    console.log('creo el screening');
    await postScreening({ body: body, movie: movieFather });
  }
};
