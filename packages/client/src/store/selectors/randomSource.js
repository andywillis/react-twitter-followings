import { selector } from 'recoil';

import sourcesState from '../atoms/sources';

const randomSourceState = selector({
  key: 'randomSource',
  get: ({ get }) => {
    const sources = get(sourcesState);
    const rnd = Math.floor(Math.random() * ((sources.length - 1) - 0) + 0);
    return sources[rnd];
  },
});

export default randomSourceState;
