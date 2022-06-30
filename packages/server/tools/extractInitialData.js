import couch from '../service/couch';

import zoe from '../data/json/zcumming.json' assert { type: 'json' };

const {
  rss: {
    channel: {
      name,
      item
    }
  }
} = zoe;

console.log(name, item);

const dates = item.map(obj => obj.pubDate);

console.log(dates);
