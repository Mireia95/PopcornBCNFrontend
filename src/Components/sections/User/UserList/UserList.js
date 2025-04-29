import { createBackButton } from '../../../common/Button/BackButton/BackButton';
import { displayUserOptions } from '../UserOptions/UserOptions';
import './UserList.css';

export const displayUserList = (user) => {
  const userPage = document.getElementById('user');
  const divOptionContent = document.querySelector('.divOptionsContent');
  divOptionContent.innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('userList');
  divOptionContent.append(div);

  const backButt = createBackButton({
    clean: '.divOptionsContent',
    funcion: () => displayUserOptions(user),
    header: false,
    logo: false
  });

  userPage.append(backButt);
};
