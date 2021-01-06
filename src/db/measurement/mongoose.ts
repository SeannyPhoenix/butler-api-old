import mongoose from 'mongoose';
import {v4 as uuid} from 'uuid';
const {Schema, model} = mongoose;

export const UNIT_TYPES: string[] = [
  'time',
  'length',
  'mass',
  'temperature',
  'volume',
];

export const MeasurementSchema = new Schema({
  _id: {
    type: String,
    required: true,
    default: uuid,
  },
  unit: {
    type: String,
    required: true,
    enum: UNIT_TYPES,
  },
  naturalQuantity: {
    type: Number,
    required: true,
  },
  naturalUnit: {
    type: String,
    required: true,
  },
  baseUnit: {
    type: Number,
    required: true,
  },
  baseQuantity: {
    type: Number,
    required: true,
  },
});

export const Measurement = model('Measurement', MeasurementSchema);
