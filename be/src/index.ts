import express from 'express';
import { routes } from './routes/routes';
import cors from 'cors';
import { allowedOrigins } from './utils/cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.BACK_END_API_PORT || 3001;

const corsOptions = {
  origin: allowedOrigins(),
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT'],
};

app.use(cors(corsOptions));
const extended = process.env.NODE_ENV === 'test';
app.use(express.json());
app.use(express.urlencoded({ extended }));

routes.forEach((route) => {
  const { method, path, middleware, handler } = route;
  app[method](path, ...middleware, handler);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Express with Typescript! http://localhost:${PORT}`);
  });
}

export default app;
