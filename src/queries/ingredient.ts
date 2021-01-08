import {GraphQLObjectType, GraphQLString} from 'graphql';
import {DBIngredientType} from '../db/ingredient';

export const ingredientQueries = {
  addIngredient: {
    type: DBIngredientType,
    args: {
      recipeId: {
        type: GraphQLString,
      },
      name: {
        type: GraphQLString,
      },
      measurement: {
        type: new GraphQLObjectType({
          name: 'measurement',
          fields: {

          },
        }),
      },

    },
  },
};
