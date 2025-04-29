import './createSelectOptions.css';

export const createSelectOptions = ({
  selectName,
  options = [],
  values,
  selected
}) => {
  //selectName : nombre para el select
  //options: las opciones del select
  //values: un array de valores, para asignar a cada <option>. Si no se pasa como argumento, le asignaré el texto del option como value

  const div = document.createElement('div');
  const label = document.createElement('label');
  label.innerText = selectName;
  const select = document.createElement('select');
  select.name = selectName.toLowerCase();
  select.id = selectName;

  const optionsList = options;

  for (let i = 0; i < optionsList.length; i++) {
    const option = document.createElement('option');
    option.innerText = optionsList[i];
    option.value = values ? values[i] : optionsList[i];
    option.selected = selected === optionsList[i] ? true : false;
    select.append(option);
  }

  div.append(label, select);
  div.classList.add('select');
  return div;
};
