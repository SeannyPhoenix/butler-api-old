import {
  GraphQLBoolean, 
  GraphQLFieldConfigMap, 
  GraphQLNonNull,
   GraphQLString
  } from 'graphql';
import {GQLFood} from '../db/food.js';
import { db } from '../db/index.js';

export const foodQueries: GraphQLFieldConfigMap<any, any> = {
  getFoodById: {
    type: GQLFood,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: async (args) => {
      const food = await db.Food.findById(args.id);
      return food;
    },
  },
};

// export const foodMutations: GraphQLFieldConfigMap<any, any> = {
//   createFood: {
//     type: GQLFood,
//     args: {
//       recipeId: {
//         type: GraphQLString,
//       },
//       name: {
//         type: GraphQLString,
//       },
//     },
//     resolve: ()=>null,
//   },
//   removeFood: {
//     type: GraphQLBoolean,
//     args: {
//       recipeId: {
//         type: GraphQLString,
//       },
//       foodId: {
//         type: GraphQLString,
//       },
//     },
//   },
// };
