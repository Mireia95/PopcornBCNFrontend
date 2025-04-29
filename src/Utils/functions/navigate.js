//función para navegar entre paginas
export const navigate = (e, option) => {
  e.preventDefault(); //evito que recargue la página
  window.history.pushState('', '', option.path);
  option.page();
};
