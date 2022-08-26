import mongoose from 'mongoose';
import 'dotenv/config';

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(() => {
    console.log('Database connected!!!');
  });

export default mongoose;
