import client from '../../client';
import { Resolvers } from '../../typed';

const resolvers: Resolvers = {
  Query: {
    seeProfile: (_, { username }) =>
      client.user.findUnique({ where: { username } }),
  },
};

export default resolvers;
