import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import mainRoute from './src/routes/main.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

/* ROTAS */
app.use('/todos', mainRoute);

app.listen(8000, () => {
  console.log('WS okay');
});
