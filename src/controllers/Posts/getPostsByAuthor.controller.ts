import { Request, Response } from 'express';
import { PostsRepository } from '../../repositories';
import { ErrorHandler } from '../../services/errors.services';
import { isNumeric } from '../../utils';

const getPostsByAuthor = async (req:Request, res:Response) => {
    try {
      const { author_id } = req.params;
      if (!isNumeric(author_id)) {
        throw new ErrorHandler(400, 'Author\'s id must be in integer numeric digits');
      }

      const posts = await new PostsRepository().findPostsByAuthor(parseInt(author_id, 10), req.paginate.page, req.paginate.limit);
      if (posts.length === 0) {
        throw new ErrorHandler(404, 'Author or author\'s posts not found');
      }
      return res.status(200)
      .json(posts);
    } catch (err) {
      console.log(err);
      return res.status(err.statusCode).json({ error: err.message });
    }
};

export default getPostsByAuthor;
