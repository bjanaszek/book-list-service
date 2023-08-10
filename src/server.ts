import Express from 'express';
import Dotenv from 'dotenv';
import { apiRouter } from './routes/api';

Dotenv.config();

const app = Express(),
    port = process.env.PORT;

// Set up other middleware:
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// Set up routing:
app.use(apiRouter);

app.listen(port, () => {
    console.log(`Service listening on port ${port}`);
});