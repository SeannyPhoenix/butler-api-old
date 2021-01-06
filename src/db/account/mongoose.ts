import mongoose from 'mongoose';
import {v4 as uuid} from 'uuid';

const {Schema, model} = mongoose;

export const AccountSchema = new Schema({
  _id: {
    type: String,
    required: true,
    default: uuid,
  },
  name: {
    type: String,
    maxlength: 30,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export const Account = model('Account', AccountSchema);
