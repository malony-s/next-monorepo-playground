import { GraphQLYogaError } from '@graphql-yoga/node';
import { GraphQLString } from 'graphql/type';

const Error = {
  type: GraphQLString,
  args: {
    name: { type: GraphQLString },
  },
  resolve: () => {
    throw new GraphQLYogaError('Ocurred Error.', {
      code: '500',
    });
  },
};
export default Error;
