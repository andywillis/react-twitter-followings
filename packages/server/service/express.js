import path from 'path';
import express from 'express';
import https from 'https';

import dirname from '../helpers/dirname';
import serverOptions from './serverOptions';

const app = express();

app.use(express.static(path.join(dirname, '../build')));
app.use(express.json());

const port = process.env.PORT || 4000;

const server = https.createServer(serverOptions, app);

export { app, port, server };
