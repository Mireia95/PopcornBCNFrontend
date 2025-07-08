import { printPageAdmin } from '../../Pages/Admin/Admin';
import { printPageCinemas } from '../../Pages/Cinemas/Cinemas';
import { printPageMovies } from '../../Pages/Movies/Movies';
import { printPageSupport } from '../../Pages/Support/Support';
import { printPageUser } from '../../Pages/User/User';

//data del header
export const menuHeader = [
  {
    name: 'Películas',
    icon: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1736263679/PopcornBCN/pelicula_jf5as1.png',
    page: printPageMovies,
    path: '/movies',
    role: 'user',
    class: 'movies'
  },
  {
    name: 'Cines',
    icon: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1751900911/PopcornBCN/cineSitting_cixspd.png',
    page: printPageCinemas,
    path: '/cinemas',
    role: 'user',
    class: 'cines'
  },
  {
    name: 'Admin',
    page: printPageAdmin,
    icon: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1738065527/PopcornBCN/admin_lpr2xk.png',
    path: '/admin',
    role: 'admin',
    class: 'admin'
  },
  {
    name: 'Mi cuenta',
    page: printPageUser,
    icon: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1736168393/PopcornBCN/Usermenu_xxvbdy.png',
    path: '/user',
    role: 'user',
    class: 'user'
  },
  {
    name: 'Soporte',
    page: printPageSupport,
    icon: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1744191292/PopcornBCN/About_eg6qzw.png',
    path: '/soporte',
    role: 'user',
    class: 'support'
  }
];
