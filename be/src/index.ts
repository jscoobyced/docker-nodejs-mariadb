import express from 'express';
import { routes } from './routes';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3001;

const corsOptions = {
  origin: `http://${process.env.FRONT_END_API_HOST}:${process.env.FRONT_END_API_PORT}`,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));

routes.forEach((route) => {
  const { method, path, middleware, handler } = route;
  app[method](path, ...middleware, handler);
});

app.listen(PORT, () => {
  console.log(`Express with Typescript! http://localhost:${PORT}`);
});
