import * as express from 'express';
import {movieRouter} from './routes/';

const api = express();

api.use('/movies',movieRouter);


export default api;