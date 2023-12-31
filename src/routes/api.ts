import Express from 'express';
import Books from '../business/books';

const HTTP_STATUS_OK = 200;
export const apiRouter = Express.Router();

apiRouter.post('/v1/books', async (req, res) => {
    console.log(`Handling POST to /v1/books: ${req.body}`);
    const { author, title, publisher, date_read } = req.body;
    const result = await Books.insert({ author, title, publisher, date_read });

    res.status(HTTP_STATUS_OK).json(result);
});

apiRouter.get('/v1/books', async (req, res) => {
    console.log('Handling GET to /v1/books');
    const dbresult = await Books.getAll();
    const result = {
        count: dbresult.rowCount,
        books: dbresult.rows
    };
    
    res.status(HTTP_STATUS_OK).json(result);
});

apiRouter.delete('/v1/books/:id', async (req, res) => {
    const { id } = req.params;
    console.log(`Handling DELETE to /v1/books/:${id}`);
    const result = await Books.delete(id);

    res.status(HTTP_STATUS_OK).json(result);
});