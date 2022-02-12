import {GraphQLObjectType, GraphQLString} from 'graphql';
import mongoose from 'mongoose';
import {v4 as uuid} from 'uuid';
const {Schema, model} = mongoose;

// Set up the mongoose schema and model
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

// Set up the graphql schema
export const GQLAccount = new GraphQLObjectType({
  name: 'Account',
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
    email: {
      type: GraphQLString,
      resolve: (parent): String => {
        return parent.email;
      },
    },
  },
});
