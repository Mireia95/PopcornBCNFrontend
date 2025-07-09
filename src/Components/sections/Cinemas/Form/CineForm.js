import { trimValueForm } from '../../../../Utils/functions/formTrimValue';
import { editCinema } from '../../../../Utils/routes/Cinemas/editCinema';
import { postCinema } from '../../../../Utils/routes/Cinemas/postCinema';

import { createinputForm } from '../../../common/Form/FieldForm/InputForm/createInputForm';
import './CineForm.css';

export const getCinemaForm = async ({ form, element }) => {
  //renombro datos de element, para comodidad
  const cinema = element;

  const name = createinputForm({
    labelText: 'Nombre',
    placeholder: 'Nombre',
    name: 'name',
    value: cinema ? cinema.name : ''
  });

  const address = createinputForm({
    labelText: 'Dirección',
    placeholder: 'Dirección',
    name: 'address',
    value: cinema ? cinema.address : ''
  });

  const link = createinputForm({
    labelText: 'Link web cine',
    placeholder: 'Copia aquí la URL de la web del cine...',
    name: 'link',
    value: cinema ? cinema.link : ''
  });

  const specialDay = createinputForm({
    labelText: 'Special Day',
    placeholder: 'Indica día y precio',
    name: 'specialDay',
    value: cinema ? cinema.specialDay : ''
  });

  form.append(name, address, link, specialDay);

  //creo evento submit del form para enviar los datos
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    trimValueForm(form);

    const { name, address, link, specialDay } = e.target;

    const body = {
      name: name.value,
      address: address.value,
      link: link.value,
      specialDay: specialDay.value
    };

    if (element) {
      //si he pasado el "element: cine" quiere decir que queremos editarlo
      await editCinema({ cinema: element, body: body });
    } else {
      //si no he pasado por prop ningun element entonces queremos añadir un nuevo cine
      await postCinema(body);
    }
  });
};
