import { cleanElement } from '../../Utils/functions/cleanElement';
import { createSection } from '../../Utils/functions/createSection';
import './support.css';

export const printPageSupport = () => {
  console.log('pintando pagina de support');
  cleanElement({ element: 'main' });
  const section = createSection('main', 'support', 'page');
  section.innerHTML = '<h2> SOPORTE </h2>';

  //crear elementos
  const div = document.createElement('div');
  div.classList.add('flexCenter', 'soporte');
  div.innerHTML = `
 <h3> Contáctanos </h3>
 <p> Necesitas ayuda? Nuestro team estarà encantado de poder ayudarte. Ponte en contacto con nosotros enviandonos un mail a esta dirección: <b> popcornbcn@gmail.com </b> </p>
 <a href="mailto: popcornbcn@gmail.com?subject=Consulta&body=Hola, tengo una consulta sobre..."> Enviar correo </a>
 `;

  section.append(div);
};
