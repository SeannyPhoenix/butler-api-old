import {connect as mongooseConnect} from 'mongoose';
import {Account} from './account/mongoose.js';
import {Measurement} from './measurement/mongoose.js';

const mongodbURL: string = process.env.MONGODB_URL || '';

mongooseConnect(mongodbURL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
    .then(()=>console.log('MongoDB connected.'))
    .catch((error) => {
      console.error('MongoDB connection error:');
      console.error(error);
    });

const db = {
  Measurement,
  Account,
};

export default db;
