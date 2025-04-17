import {
  Request,
  Response,
  NextFunction,
} from 'express';

// TODO handle errors
export default function error(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(err);
  res.status(500)
    .json({
      status: 500,
      message: err,
    });

  next();
}
