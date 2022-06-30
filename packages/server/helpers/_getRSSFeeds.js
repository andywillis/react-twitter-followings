import fs from 'fs';
import fetch from 'node-fetch';
import createThrottle from 'async-throttle';

import dirname from './dirname';

const throttle = createThrottle(2);

import followings from '../data/data.json' assert { type: 'json' };

async function getData(handle) {

  try {

    const { name, rss } = handle;
    const response = await fetch(rss);

    if (response.ok) {

      const dest = fs.createWriteStream(`${dirname}/../data/xml/${name}.xml`);

      response.body.pipe(dest);

      response.body.on('end', () => {
        console.log(`Written ${name} ${i} of ${len}`);
        res();
      });

      response.body.on('error', () => {
        console.log(`Error with ${name}`);
        rej();
      });

    }  
  } catch (err) {
    rej(err);
  }

}

function saveXMLFeed(data) {
  return data.map(handle => {
    return throttle(async () => await getData(data));
  });
}

function compileData(followings) {
  return followings.map((handle, i) => {
    const { name, rss } = handle;
    const output = {
      name,
      rss: rss.replace('https://nitter.net', 'https://nitter.42l.fr')
    };
    return output;
  });
}

async function getRSSFeeds(followings) {

  const data = compileData(followings);
  const promises = saveXMLFeed(data);

  // const data = followings.map((handle, i) => {
  //   const { name, rss } = handle;
  //   console.log(name, rss);
  //   return { name, rss };
  // });
  await Promise.allSettled(data);
  console.log(data.length);
  console.log('Done!');
}

getRSSFeeds(followings);
