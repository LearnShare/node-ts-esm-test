import {
  Router,
  Request,
  Response,
} from 'express';

import helloRouter from './hello';
import logRouter from './log';

const router = Router();

router.use('/api/hello', helloRouter);
router.use('/api/log', logRouter);

// 404
router.use((req: Request, res: Response) => {
  throw new Error(`${ req.path } not found`);
});

export default router;
