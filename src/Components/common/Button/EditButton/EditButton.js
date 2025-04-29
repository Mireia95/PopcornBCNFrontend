import { createButton } from '../GenericButton/Button';
import './EditButton.css';

export const createEditButt = (texto) => {
  const button = createButton({
    texto: texto,
    clase: 'editButt',
    url: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1736437728/PopcornBCN/edit_vozzsj.png'
  });
  return button;
};
