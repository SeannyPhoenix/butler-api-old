import {GraphQLObjectType, GraphQLString} from 'graphql';
import mongoose from 'mongoose';
import {v4 as uuid} from 'uuid';
const {Schema, model} = mongoose;

// Set up the mongoose schema and model
export const CategorySchema = new Schema({
  _id: {
    type: String,
    required: true,
    default: uuid,
  },
  name: {
    type: String,
    maxlength: 20,
    required: true,
  },
});

export const Category = model('Category', CategorySchema);

// Set up the graphql schema
export const GQLCategory = new GraphQLObjectType({
  name: 'Category',
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
