import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes';

dotenv.config();

const PORT = 4000;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
