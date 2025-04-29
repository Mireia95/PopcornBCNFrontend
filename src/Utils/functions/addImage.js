export const addImage = (alt, url) => {
  const img = document.createElement('img');
  img.alt = alt;
  img.src = url;

  return img;
};
