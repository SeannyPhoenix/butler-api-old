import {GraphQLFloat, GraphQLScalarType, GraphQLString} from 'graphql';

export const convertType = (type: Function): GraphQLScalarType | null => {
  switch (type) {
    case String:
      return GraphQLString;
    case Number:
      return GraphQLFloat;
    default:
      console.log(`Please add handler for ${type}.`);
      return null;
  }
};
