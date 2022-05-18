import * as bcrypt from 'bcrypt';
import client from '../../client';
import { Resolvers } from '../../typed';

const resolvers: Resolvers = {
  Mutation: {
    createAccount: async (
      _,
      { username, firstname, lastname, email, password },
    ) => {
      try {
        const exist = await client.user.findFirst({
          where: {
            OR: [{ username }, { email }],
          },
        });
        if (exist) {
          return {
            ok: false,
            error: '이미 가입된 계정이거나 이메일입니다',
          };
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await client.user.create({
          data: {
            username,
            firstname,
            lastname,
            email,
            password: hashedPassword,
          },
        });
        return {
          ok: true,
        };
      } catch {
        return {
          ok: false,
          error: '계정을 생성할 수 없습니다',
        };
      }
    },
  },
};

export default resolvers;
