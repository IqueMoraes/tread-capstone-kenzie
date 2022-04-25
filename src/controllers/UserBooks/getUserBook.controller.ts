import { Request, Response } from 'express';
import { UserBooksRepository } from '../../repositories';
import { IData } from '../../repositories/UserBooksRepository/interfaces';

const getUserBookController = async (req:Request, res:Response) => {
    const userBook = await new UserBooksRepository().findUserBook(req.params as unknown as IData);
    return res.status(200).json(await userBook.book_id);
};

export default getUserBookController;
