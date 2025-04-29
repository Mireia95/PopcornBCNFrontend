export const closeButton = ({ removeEle, image = true, color }) => {
  const close = document.createElement('button');
  close.type = 'button';
  close.classList.add('close');

  if (image) {
    const img = document.createElement('img');
    img.alt = 'cerrar';
    img.src =
      color === 'light'
        ? 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1737476529/PopcornBCN/closeWhite_o4djmv.png'
        : 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1742856428/PopcornBCN/closebuttDARK.png';
    close.append(img);
  } else {
    close.innerText = 'Cerrar';
  }

  close.addEventListener('click', () => {
    removeEle.remove();
  });

  return close;
};
