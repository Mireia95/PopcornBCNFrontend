import './createInputForm.css';

//creo funcion para crear un label y input genericos para un form, para usar todas las veces que necesito
export const createinputForm = ({
  labelText,
  placeholder,
  value,
  type = 'text',
  required = true,
  id,
  name,
  checked = false,
  readonly = false
}) => {
  const div = document.createElement('div');
  div.classList.add('fieldForm');
  const label = document.createElement('label');
  const input = document.createElement('input');

  label.textContent = labelText;
  if (placeholder) {
    input.placeholder = placeholder;
  }

  input.readOnly = readonly;
  input.minLength = 3;

  input.type = type;
  if (type === 'password') {
    input.minLength = 5;
  }

  if (type === 'file') {
    input.accept = 'image/*';
  }
  input.required = required;

  input.value = value ? value : input.value;
  if (id) {
    input.id = id;
  }

  //si pasamos el prop checked, quiere decir que es de tipo checkbox, y necesitamos saber si lo pintamos ya chequeado o no
  if (checked) {
    input.checked = true;
  }

  if (name) {
    input.name = name;
  }

  div.append(label, input);

  return div;
};
