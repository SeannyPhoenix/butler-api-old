import {GraphQLObjectType, GraphQLString} from 'graphql';
import mongoose from 'mongoose';
import {v4 as uuid} from 'uuid';
const {Schema, model} = mongoose;

// Sert up the mongoose schema
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

// set up the graphql schema
export const DBAccountType = new GraphQLObjectType({
  name: 'Account',
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
    email: {
      type: GraphQLString,
      resolve: (parent) => {
        return parent.email;
      },
    },
  },
});
