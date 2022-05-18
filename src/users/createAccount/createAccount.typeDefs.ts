import { gql } from 'apollo-server';

export default gql`
  type createAccountResponse {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createAccount(
      username: String!
      firstname: String!
      lastname: String
      email: String!
      password: String!
    ): createAccountResponse!
  }
`;
