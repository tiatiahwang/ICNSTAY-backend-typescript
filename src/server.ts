require('dotenv').config();

import express from 'express';
import logger from 'morgan';
import { ApolloServer } from 'apollo-server-express';
import { resolvers, typeDefs } from './schema';

const PORT = process.env.PORT;
const app = express();

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(logger('tiny'));
apollo.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`Server Running on http://localhost:${PORT}/graphql`),
);
