import {GraphQLObjectType, GraphQLString} from 'graphql';
import mongoose from 'mongoose';
import {v4 as uuid} from 'uuid';
import {GQLMeasurement, MeasurementSchema} from './measurement';
const {Schema, model} = mongoose;

// Sert up the mongoose schema
export const IngredientSchema = new Schema({
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
  measurement: {
    // embed the measurement document in the ingredient document
    type: MeasurementSchema,
  },
  info: {
    type: String,
  },
});

export const Ingredient = model('Ingredient', IngredientSchema);

// set up the graphql schema
export const DBIngredientType = new GraphQLObjectType({
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
