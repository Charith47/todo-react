import express, { Express } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';

import mongoose from 'mongoose';
import todoRoutes from './routes/todos';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/todos', todoRoutes);

app.get('/api/', (req, res) => {
    res.status(200).json({ msg: 'Hello from the server' });
});

const mongoUrl = process.env.DB_URL;

if (mongoUrl !== undefined) {
    mongoose
        .connect(mongoUrl)
        .then(() => {
            console.log('Connected to the database');
            app.listen(PORT, () => console.log(`⚡ Server running on http://localhost:${PORT}`));
        })
        .catch((error) => {
            console.log(error);
        });
}
