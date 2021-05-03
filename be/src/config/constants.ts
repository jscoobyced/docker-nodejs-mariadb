import * as dotenv from 'dotenv';

dotenv.config();

export const ERRORS = {
  BAD_USER_INFORMATION: 'Bad user information',
};

export const DATABASE = {
  HOST: process.env.DB_HOST,
  USERNAME: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  NAME: process.env.DB_NAME,
};
