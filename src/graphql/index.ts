/* eslint-disable require-jsdoc */
import {graphqlHTTP} from 'express-graphql';

import {
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import {graphqlTypes} from '../db/index.js';
import {accountQueries, accountMutations} from '../queries/account.js';

// For each Mongoose schema, create a GraphQL type
const types: GraphQLNamedType[] = [
  graphqlTypes.DBAccountType,
];


const query = new GraphQLObjectType({
  name: 'query',
  fields: {
    ...accountQueries,
  },
});

const mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    ...accountMutations,
  },
});

// Create GraphQL schema from types, queries, and
const schema = new GraphQLSchema({
  types,
  query,
  mutation,
});

export const graphqlServer = graphqlHTTP({schema});
