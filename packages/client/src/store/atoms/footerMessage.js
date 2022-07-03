import { atom } from 'recoil';

const footerMessageState = atom({
  key: 'footerMessage',
  default: `Andy Willis ${new Date().getFullYear()}`
});

export default footerMessageState;
