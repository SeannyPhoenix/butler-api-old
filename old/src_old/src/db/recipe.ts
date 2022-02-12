import {GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';
import mongoose from 'mongoose';
import {v4 as uuid} from 'uuid-mongodb';
import {CategorySchema, GQLCategory} from './category.js';
import {GQLIngredient} from './ingredient.js';

const {Schema, model} = mongoose;


// Set up the mongoose schema and model
export const RecipeSchema = new Schema({
  _id: {
    type: 'object',
    value: {type: 'Buffer'},
    default: uuid,
  },
  name: {
    type: String,
    maxlength: 30,
    required: true,
  },
  ingredients: {
    type: ['object'],
    value: {type: ['Buffer']},
  },
  // instructions: {
  //   type: [String],
  // },
  // categories: {
  //   type: [CategorySchema],
  // },
});

export const Recipe = model('Recipe', RecipeSchema);

// Set up the graphql schema
export const GQLRecipe = new GraphQLObjectType({
  name: 'Recipe',
  fields: {
    id: {
      type: GraphQLString,
      resolve: (parent): String => {
        return parent._id;
      },
    },
    name: {
      type: GraphQLString,
      resolve: (parent): String => {
        return parent.name;
      },
    },
    ingredients: {
      type: new GraphQLList(GQLIngredient),
      resolve: (parent) => {
        return parent.ingredients;
      },
    },
    // instructions: {
    //   type: new GraphQLList(GraphQLString),
    //   resolve: (parent): String[] => {
    //     return parent.instructions;
    //   },
    // },
    // categories: {
    //   type: new GraphQLList(GQLCategory),
    //   resolve: (parent): String => {
    //     return parent.categories;
    //   },
    // },
  },
});
