import './Loading.css';

export const loading = (father) => {
  const div = document.createElement('div');
  div.className = 'loading';
  father.append(div);
};
