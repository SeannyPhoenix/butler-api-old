import {GraphQLObjectType, GraphQLString} from 'graphql';
import mongoose from 'mongoose';
import {v4 as uuid} from 'uuid-mongodb';
import {GQLMeasurement, MeasurementSchema} from './measurement.js';
const {Schema, model} = mongoose;

// Set up the mongoose schema and model
export const IngredientSchema = new Schema({
  _id: {
    _id: {
      type: 'object',
      value: {type: 'Buffer'},
      default: uuid,
    },
  },
  name: {
    type: String,
    maxlength: 30,
    required: true,
  },
  measurement: {
    // embed the measurement document in the ingredient document
    type: MeasurementSchema,
  },
  info: {
    type: String,
  },
});

export const Ingredient = model('Ingredient', IngredientSchema);

// Set up the graphql schema
export const GQLIngredient = new GraphQLObjectType({
  name: 'Ingredient',
  fields: {
    id: {
      type: GraphQLString,
      resolve: (parent) => {
        return parent._id;
      },
    },
    name: {
      type: GraphQLString,
      resolve: (parent) => {
        return parent.name;
      },
    },
    measurement: {
      type: GQLMeasurement,
      resolve: (parent) => {
        return parent.measurement;
      },
    },
  },
});
