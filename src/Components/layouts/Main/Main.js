import './Main.css';

export const createMain = () => {
  const divApp = document.querySelector('#app');
  const main = document.createElement('main');
  divApp.appendChild(main);
};
