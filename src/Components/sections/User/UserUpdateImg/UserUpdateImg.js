import { editUser } from '../../../../Utils/routes/User/editUser';
import './UserUpdateImg.css';

export const updateImgUser = () => {
  const updateImgForm = document.createElement('form');
  const label = document.createElement('label');
  label.setAttribute('for', 'userImg'); //label.for="userImg"
  label.classList.add('updateImg', 'flexCenter');
  label.innerHTML = `<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1742068466/PopcornBCN/updateImg_x1xt1c.png" alt="actualiza imagen"> Actualiza tu imagen de perfil`;

  const input = document.createElement('input');
  input.type = 'file';
  input.id = 'userImg';
  input.name = 'userImg';
  input.accept = 'image/png, image/jpeg, image/webp';

  input.addEventListener('change', async () => {
    const formData = new FormData();
    formData.append('image', input.files[0]);
    const user = await editUser({
      body: formData,
      isJson: false,
      page: 'UserInfo'
    });
    const updateUser = JSON.parse(localStorage.getItem('user'));
    //actualizo el div user que tiene la imagen
    const imgUser = document.querySelector('.imgUser > img');
    imgUser.src = `${updateUser.image}`;
  });

  updateImgForm.append(label, input);

  return updateImgForm;
};
