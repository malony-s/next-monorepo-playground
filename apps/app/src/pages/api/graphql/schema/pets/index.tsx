import { GraphQLString } from 'graphql/type';

import { Pet } from '@shared/api';

const Pets = {
  // type: Test,
  args: {
    name: { type: GraphQLString },
  },
  // root, args, context, info
  resolve: (root: void, args: ''): Array<Pet> => {
    return api;
  },
};

export default Pets;
