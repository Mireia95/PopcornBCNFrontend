import './Logo.css';

export const getLogo = () => {
  const main = document.querySelector('main');
  const divLogo = document.createElement('div');
  divLogo.classList.add('logo', 'flexCenter');
  const logo = createLogo();
  const name = document.createElement('h4');
  name.innerText = 'PopcornBCN';
  divLogo.append(logo, name);

  divLogo.addEventListener('click', () => {
    window.location.href = '/'; //vuelvo a la URL inicial
    console.log(window.location.href);
  });
  main.append(divLogo);
};

export const createLogo = () => {
  const logo = document.createElement('img');
  logo.alt = 'Logo PopcornBCN';
  logo.src =
    'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735736068/PopcornBCN/logopopcorn_n7gggm.png';

  return logo;
};
