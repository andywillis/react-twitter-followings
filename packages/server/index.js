import { app, port, server } from './helpers/express.js';
import dirname from './helpers/dirname.js';
import couch from './helpers/couch.js';

import routes from './routes/index.js'

import followings from './data/followings.json' assert { type: 'json' };

app.get('/followings', routes.followings(followings));
app.get('/', routes.root());

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
