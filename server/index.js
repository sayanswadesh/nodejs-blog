import express from 'express';
import 'dotenv/config';
import routes from './routes/auth.js';
import dbConnect from './lib/dbConnect.js';

const app = express();

app.use('/api', routes);
dbConnect;

app.listen(process.env.PORT, () => {
  console.log(`Server Running On ${process.env.PORT}`);
});
