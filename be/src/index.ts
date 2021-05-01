import express from 'express';
import { routes } from './routes';
import cors from 'cors';
import { allowedOrigins } from './utils/cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.BACK_END_API_PORT || 3001;

console.log(allowedOrigins());

const corsOptions = {
  origin: allowedOrigins(),
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT'],
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
