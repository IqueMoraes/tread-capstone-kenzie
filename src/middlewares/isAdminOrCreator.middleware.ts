import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { ErrorHandler } from '../services/errors';

const isAdminOrCreator = (entity) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userBook: any = await getRepository(entity).findOne(req.params.id);
    const { user } = req;

    if (!userBook) {
      throw new ErrorHandler(404, 'UserBook not found.');
    }
    if (!user) {
      throw new ErrorHandler(404, 'User not found.');
    }

    if (userBook.id !== user.id && !user.admin) {
      throw new ErrorHandler(403, 'It is not possible to change the data of other users.');
    }
    return next();
  } catch (e) {
    return res.status(e.statusCode).json({ error: e.message });
  }
};

export default isAdminOrCreator;
