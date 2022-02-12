import {
  GraphQLEnumType,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export const GQLUnitType = new GraphQLEnumType({
  name: 'unitType',
  values: {
    time: {},
    length: {},
    mass: {},
    temperature: {},
    volume: {},
  },
});

export const GQLImperialUnits = new GraphQLEnumType({
  name: 'imporeial units',
  values: {
    in: {description: 'inch'},
    ft: {description: 'foot'},
    yd: {description: 'yard'},
    mile: {description: 'mile'},
    lb: {description: 'pound'},
    degF: {description: 'degrees Fahrenheit'},
    tsp: {description: 'teaspoon'},
    TBSP: {description: 'tablespoon'},
    cup: {description: 'cup'},
  },
});

export const GQLMetricUnits = new GraphQLEnumType({
  name: 'metric units',
  values: {
    in: {description: 'inch'},
    ft: {description: 'foot'},
    yd: {description: 'yard'},
    mile: {description: 'mile'},
    lb: {description: 'pound'},
    degF: {description: 'degrees Fahrenheit'},
    tsp: {description: 'teaspoon'},
    TBSP: {description: 'tablespoon'},
    cup: {description: 'cup'},
  },
});

export const MeasurementType = new GraphQLObjectType({
  name: 'measurement',
  fields: {
    name: {type: GraphQLString},
    // unitType: {type: GQLImperialUnits | GQLMetricUnits},
    quantity: {type: GraphQLFloat},
    unit: {type: GraphQLString},
  },
});
