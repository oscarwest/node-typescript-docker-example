import * as http from 'http';
import * as express from 'express';
import * as config from 'config';
import * as path from 'path';
import * as redis from 'redis';

const app = express();
const server = http.createServer(app);
const client = redis.createClient(6379, 'redis');

// Express variables
const port = process.env.PORT || 3000;
app.set('port', port);

const key = 'someKey';

app.post('/', (req, res, next) => {
  const value: string = config.get('stuff.moreStuff');
  client.set(key, value);
  res.sendStatus(200);
});

app.get('/', (req, res, next) => {
  client.get(key, (err, reply: string) => {
    if (err) { res.send(400); }
    
    res.send(JSON.stringify(reply));
  });
});

// Start the server
server.listen(port, () => {
  console.log('Running server on port %s', port);
});


module.exports = app;
