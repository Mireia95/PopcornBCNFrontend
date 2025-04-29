import './Footer.css';

export const getFooter = () => {
  const divApp = document.querySelector('#app');
  const footer = document.createElement('footer');
  footer.className = 'flexCenter';
  footer.innerHTML = '<p> &#169 2024 - PopcornBCN </p>';
  divApp.append(footer);
};
