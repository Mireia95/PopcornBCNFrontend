/* funcion que permite crear una <section>. 
Le paso como parametros el elemento padre, y el id que le queremos poner */
export const createSection = (father, id, clase) => {
  const fatherEle = document.querySelector(father);
  const section = document.createElement('section');
  section.id = id;
  if (clase) {
    section.classList.add(clase);
  }

  fatherEle.append(section);
  return section;
};
