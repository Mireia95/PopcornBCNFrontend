import { displayUserComments } from '../../Components/sections/User/UserComments/UserComments';
import { displayUserData } from '../../Components/sections/User/UserData/UserData';
//import { displayUserList } from '../../Components/sections/User/UserList/UserList';

//data del header
export const userOptions = [
  {
    name: 'Mis datos',
    icon: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735902634/PopcornBCN/userwhite_talxx0.png',
    page: displayUserData
  },
  {
    name: 'Mis comentarios',
    icon: 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1740569732/PopcornBCN/comments_lklffm.png',
    page: displayUserComments
  }
];
