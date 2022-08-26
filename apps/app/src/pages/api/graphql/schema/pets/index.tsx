import { GraphQLString } from 'graphql/type';

import { Pet, PetApi } from '@shared/api/petStore';

const api = new PetApi();

const Pets = {
  // type: Test,
  args: {
    name: { type: GraphQLString },
  },
  // root, args, context, info
  resolve: async (): Promise<Array<Pet>> => {
    const { data } = await api.findPetsByStatus(['available']);
    return data;
  },
};

export default Pets;
