import { atom } from 'recoil';

const footerMessage = atom({
  key: 'footerMessage',
  default: `Andy Willis ${new Date().getFullYear()}`
});

export default footerMessage;
