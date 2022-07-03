import { atom } from 'recoil';

const appTitleState = atom({
  key: 'appTitle',
  default: 'React Twitter Followings'
});

export default appTitleState;
