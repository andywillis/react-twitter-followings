import { app, port, server } from './service/express';
import couch from './service/couch';
import dirname from './helpers/dirname';

import routes from './routes/index'

import followings from './data/followings.json' assert { type: 'json' };

app.get('/followings', routes.followings(followings));
app.get('/', routes.root());

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
