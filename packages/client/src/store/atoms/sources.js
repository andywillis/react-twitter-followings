import { atom } from 'recoil';

const sourcesState = atom({
  key: 'sources',
  default: [
    'https://nitter.net',
    'https://nitter.42l.fr',
    'https://nitter.pussthecat.org',
    'https://nitter.fdn.fr',
    'https://nitter.1d4.us',
    'https://nitter.kavin.rocks',
    'https://nitter.unixfox.eu',
    'https://nitter.domain.glass',
    'https://nitter.namazso.eu',
    'https://nitter.moomoo.me',
    'https://nitter.grimneko.de',
    'https://nitter.fly.dev',
    'https://nitter.weiler.rocks',
    'https://nitter.sethforprivacy.com',
    'https://nitter.cutelab.space',
    'https://nitter.mint.lgbt',
    'https://nitter.esmailelbob.xyz',
    'https://nitter.winscloud.net',
    'https://nitter.tiekoetter.com',
    'https://nitter.spaceint.fr',
    'https://nitter.privacy.com',
    'https://nitter.mastodon.pro',
    'https://nitter.notraxx.ch',
    'https://nitter.poast.org',
    'https://nitter.bird.froth',
    'https://nitter.dcs0.hu',
    'https://nitter.privacydev.net',
    'https://nitter.ebnar.xyz',
    'https://nitter.kylrth.com',
    'https://nitter.foss.wtf',
    'https://nitter.priv.pw',
    'https://nitter.wef.lol'
  ]
});

export default sourcesState;
