import mongoose from 'mongoose';
import {v4 as uuid} from 'uuid-mongodb';
import {GraphQLObjectType, GraphQLString} from 'graphql';

const {Schema, model} = mongoose;

// Set up the mongoose schema and model
export const FoodSchema = new Schema({
  _id: {
    type: 'object',
    value: {type: 'Buffer'},
    default: uuid,
  },
  name: {
    type: String,
    maxlength: 30,
    required: true,
  },
});

export const Food = model('Food', FoodSchema);

// Set up the graphql schema
export const GQLFood = new GraphQLObjectType({
  name: 'Food',
  fields: {
    id: {
      type: GraphQLString,
      resolve: (parent): String => {
        return parent._id;
      },
    },
    name: {
      type: GraphQLString,
      resolve: (parent): String => {
        return parent.name;
      },
    },
  },
});
