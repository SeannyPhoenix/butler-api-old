import {
  GraphQLBoolean, 
  GraphQLFieldConfigMap, 
  GraphQLNonNull,
   GraphQLString
  } from 'graphql';
import MUUID from 'uuid-mongodb';
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
      try{
        console.log('-', JSON.stringify(args, null, 2))
        console.log('+', MUUID.from(args.id))
        const food = await db.Food.findById(MUUID.from(args.id));
        return food;
      } catch (err) {
        console.error(err);
      }
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
