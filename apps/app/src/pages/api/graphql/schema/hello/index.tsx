import { GraphQLString } from 'graphql/type';

const Hello = {
  type: GraphQLString,
  args: {
    name: { type: GraphQLString },
  },
  // root, args, context, info
  resolve: (root: any, args: any) => {
    const { name } = args; // the `id` argument for this field is declared above
    return `Hello ${name || 'World'}`;
  },
};

export default Hello;
