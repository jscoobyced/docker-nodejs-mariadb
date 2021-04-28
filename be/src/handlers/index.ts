import { Handler } from '../models/types';
import path from 'path';

export const home: Handler = (req, res) => {
  res.sendFile(path.resolve('index.html'));
};
