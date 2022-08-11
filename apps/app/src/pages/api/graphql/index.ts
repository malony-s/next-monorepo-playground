import { createServer } from '@graphql-yoga/node';
import type { NextApiRequest, NextApiResponse } from 'next';

import schema from './schema';

type GraphQlServer = {
  req: NextApiRequest;
  res: NextApiResponse;
};

const handler = createServer<GraphQlServer>({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
});

export default handler;

export const config = {
  api: {
    // bodyParser: false,
  },
};
