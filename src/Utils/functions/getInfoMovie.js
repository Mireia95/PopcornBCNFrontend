export const getInfoMovie = (title, info) => {
  const div = document.createElement('div');
  div.innerHTML = `
  <h4> ${title}:  </h4>
  <p> ${info ? info : ''} </p>    `;

  return div;
};
