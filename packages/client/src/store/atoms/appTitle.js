import { atom } from 'recoil';

const appTitle = atom({
  key: 'appTitle',
  default: 'React Twitter Followings'
});

export default appTitle;
