import {
  GraphQLBoolean, 
  GraphQLFieldConfigMap, 
  GraphQLNonNull,
   GraphQLString
  } from 'graphql';
import {GQLIngredient} from '../db/ingredient.js';

export const ingredientQueries: GraphQLFieldConfigMap<any, any> = {
  getIngredientById: {
    type: GQLIngredient,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: (args) => {

    },
  },
};

export const ingredientMutations: GraphQLFieldConfigMap<any, any> = {
  createIngredient: {
    type: GQLIngredient,
    args: {
      recipeId: {
        type: GraphQLString,
      },
      name: {
        type: GraphQLString,
      },
    },
    resolve: ()=>null,
  },
  removeIngredient: {
    type: GraphQLBoolean,
    args: {
      recipeId: {
        type: GraphQLString,
      },
      ingredientId: {
        type: GraphQLString,
      },
    },
  },
};
