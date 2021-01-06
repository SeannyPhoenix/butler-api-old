import {GraphQLObjectType, GraphQLString} from 'graphql';

export const DBAccountType = new GraphQLObjectType({
  name: 'Account',
  fields: {
    _id: {
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
