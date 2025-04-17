import express, {
  Express,
  Request,
  Response,
} from 'express';

import log from '@/lib/log';
import router from '@/router';
import error from '@/lib/error';

const app: Express = express();

// JSON body parser
app.use(express.json());
// log request
app.use(log);

// router modules
app.use(router);

// error
app.use(error);

const port: number = Number(process.env.SERVER_PORT) || 3030;

app.listen(port, () => {
  console.log(`[API]: ready, port: ${ port }`, '\n');
});
