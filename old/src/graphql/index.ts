import {graphqlHTTP} from 'express-graphql';
import {
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';
import {GQLSchemaTypes} from '../db/index.js';
import { foodQueries } from '../queries/food.js';

// For each Mongoose schema, create a GraphQL type
const types: GraphQLNamedType[] = GQLSchemaTypes;

const query = new GraphQLObjectType({
  name: 'query',
  fields: {
    // ...accountQueries,
    ...foodQueries,
  },
});

// const mutation = new GraphQLObjectType({
//   name: 'mutation',
//   fields: {
//     ...accountMutations,
//   },
// });

// Create GraphQL schema from types, queries, and
const schema = new GraphQLSchema({
  types,
  query,
  // mutation,
});

export const graphqlServer = graphqlHTTP({schema});
