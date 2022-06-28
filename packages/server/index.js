import { app, port, server } from './helpers/express';
import dirname from './helpers/dirname';
import routes from './routes'

import followings from './data/data.json' assert { type: 'json' };

app.get('/followings', routes.followings(followings));
app.get('/', routes.root());

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
