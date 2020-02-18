import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import App from './app';
import config from './ormconfig';
import UsersController from './controllers/user.controller';
//import PostController from './tables/users.controller';
//import validateEnv from './utils/validateEnv';
 
//validateEnv();
 
(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App([new UsersController],
    5000
  );
  app.listen();
})();