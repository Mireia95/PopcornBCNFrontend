import './CreateInputFileForm.css';

//creo funcion para crear un label y input genericos para un form, para usar todas las veces que necesito
export const createInputFileForm = ({
  labelText,
  id,
  image = 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735221385/ROCKTHECODE/RTCProyecto10MoviesBCN/imagenotfound_ze4uwx.png'
}) => {
  const divImage = document.createElement('div');

  const divLabelInput = document.createElement('div');
  divLabelInput.classList.add('fieldForm');

  const label = document.createElement('label');
  const input = document.createElement('input');

  label.textContent = labelText;
  input.type = 'file';
  input.accept = 'image/*';
  if (id) {
    input.id = id;
  }

  divLabelInput.append(label, input);

  const imageLink = document.createElement('p');
  imageLink.innerText = image;

  input.addEventListener('change', () => {
    console.log(input.files[0].name);
    imageLink.innerText = input.files[0].name
      ? input.files[0].name
      : imageLink.innerText;
  });

  divImage.append(divLabelInput, imageLink);

  return divImage;
};
