import { gql } from 'apollo-server';

export default gql`
  type User {
    id: Int!
    username: String!
    firstname: String!
    lastname: String
    email: String!
    password: String!
  }
`;
