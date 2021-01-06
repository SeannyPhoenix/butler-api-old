import mongoose from 'mongoose';
import {Account, DBAccountType} from './account.js';
import {Measurement, DBMeasurementType} from './measurement.js';

const mongodbURL: string = process.env.MONGODB_URL || '';

mongoose.connect(mongodbURL, {
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

export const db = {
  Measurement,
  Account,
};

export const graphqlTypes = {
  DBAccountType,
  DBMeasurementType,
};
