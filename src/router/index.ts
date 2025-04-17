import {
  Router,
  Request,
  Response,
} from 'express';

import helloRouter from './hello';

const router = Router();

router.use('/api/hello', helloRouter);

// 404
router.use((req: Request, res: Response) => {
  throw new Error(`${ req.path } not found`);
});

export default router;
