import {GraphQLFloat, GraphQLObjectType, GraphQLString} from 'graphql';
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

// Set up the mongoose schema
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

// set up the graphql schema
export const DBMeasurementType = new GraphQLObjectType({
  name: 'Measurement',
  fields: {
    _id: {
      type: GraphQLString,
      resolve: (parent) => {
        return parent._id;
      },
    },
    unit: {
      type: GraphQLString,
      resolve: (parent) => {
        return parent.unit;
      },
    },
    naturalQuantity: {
      type: GraphQLString,
      resolve: (parent) => {
        return parent.naturalQuantity;
      },
    },
    naturalUnit: {
      type: GraphQLString,
      resolve: (parent) => {
        return parent.naturalUnit;
      },
    },
    baseUnit: {
      type: GraphQLFloat,
      resolve: (parent) => {
        return parent.baseUnit;
      },
    },
    baseQuantity: {
      type: GraphQLFloat,
      resolve: (parent) => {
        return parent.baseQuantity;
      },
    },
  },
});
