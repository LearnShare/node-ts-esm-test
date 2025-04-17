import {
  Router,
  Request,
  Response,
} from 'express';

import prisma from '@/lib/prisma';

const logRouter = Router();

logRouter.get('/', async (req: Request, res: Response) => {
  const log = await prisma.log.create({});
  res.json(log);
});

export default logRouter;
