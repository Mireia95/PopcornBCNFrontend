import './Address.css';

export const createAddress = (address) => {
  const divAddress = document.createElement('div');
  divAddress.classList.add('address', 'flexCenter');
  divAddress.innerHTML = `<img alt="address cinema" src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1741115736/PopcornBCN/position_cmvazi.png"/> <address> ${address} </address>`;

  return divAddress;
};
