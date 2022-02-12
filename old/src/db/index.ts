import mongoose from 'mongoose';
// import {Account, GQLAccount} from './account.js';
// import {Category} from './category.js';
// import {Measurement, GQLMeasurement} from './measurement.js';
import {Food, GQLFood} from './food.js';
// import {Recipe} from './recipe.js';

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
  // Measurement,
  // Account,
  // Recipe,
  // Category,
  Food,
};

export const GQLSchemaTypes = [
  // GQLAccount,
  // GQLMeasurement,
  GQLFood,
];
