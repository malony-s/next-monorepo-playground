import { GraphQLObjectType, GraphQLSchema } from 'graphql/type';

import error from './error';
import hello from './hello';

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello,
      error,
    },
  }),
});

export default Schema;
