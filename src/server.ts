import express, { json } from 'express';
import { db } from './database/db';
import { router } from './routes';

const app = express();

app.use(json());
app.use(router);

app.listen(3000, async () => {
  await db.sync(); //sincronizar com o db
  console.log(`${process.env.PROJECT_NAME}`);
})