/* eslint-disable require-jsdoc */
import {graphqlHTTP} from 'express-graphql';

import {
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {DBAccountType} from '../db/account/graphql.js';
import {currentAccount} from '../resolvers/account.js';

// For each Mongoose schema, create a GraphQL type
const types: GraphQLNamedType[] = [
  DBAccountType,
];


const query = new GraphQLObjectType({
  name: 'api',
  fields: {
    account: {
      type: DBAccountType,
      args: {
        _id: {
          type: GraphQLString,
        },
      },
      resolve: currentAccount,
    },
  },
});


// Create GraphQL schema from types, queries, and
const schema = new GraphQLSchema({
  types,
  query,
});

export const graphqlServer = graphqlHTTP({schema});
