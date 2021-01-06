import {GraphQLString} from 'graphql';
import {graphqlTypes} from '../db/index.js';
import {db} from '../db/index.js';

export const accountQueries = {
  // find any account by id
  account: {
    type: graphqlTypes.DBAccountType,
    args: {
      id: {
        type: GraphQLString,
      },
    },
    resolve: async (p: any, args: any) => {
      try {
        const {id} = args;
        const account = await db.Account.findById(id);
        return account;
      } catch (error) {
        console.error('error:', error);
        return null;
      }
    },
  },

  // find account of logged-in user
  myAccount: {
    type: graphqlTypes.DBAccountType,
    resolve: async (p: any, args: any) => {
      try {
        const account = await db.Account.findById(
            '933e426d-7f60-435c-93fd-564c62f45a6b',
        );
        return account;
      } catch (error) {
        console.error('error:', error);
        return null;
      }
    },
  },
};

export const accountMutations = {
  createAccount: {
    type: graphqlTypes.DBAccountType,
    args: {
      name: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
    },
    resolve: async (p: any, args: any) => {
      try {
        const newAccount = db.Account.create(args);
        return newAccount;
      } catch (error) {
        console.error('DB Error:', error);
        return null;
      }
    },
  },

  updateAccount: {
    type: graphqlTypes.DBAccountType,
    args: {
      id: {
        type: GraphQLString,
      },
      name: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      },
    },
    resolve: async (p: any, args: any) => {
      const {id, ...update} = args;
      try {
        const updatedAccount = await db.Account.findByIdAndUpdate(id, update, {
          new: true,
        });
        return updatedAccount;
      } catch (error) {
        console.error('DB Error:', error);
        return null;
      }
    },
  },

  deleteAccount: {
    type: graphqlTypes.DBAccountType,
    args: {
      id: {
        type: GraphQLString,
      },
    },
    resolve: async (p: any, args: any) => {
      const {id} = args;
      try {
        const deletedAccount = await db.Account.findByIdAndDelete(id);
        return deletedAccount;
      } catch (error) {
        console.error('DB Error:', error);
        return null;
      }
    },
  },
};
