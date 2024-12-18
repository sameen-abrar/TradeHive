export const authTypeDefs = /* GraphQL */ `
  type Query {
    login(email: String!, password: String!): Int
  }
  type Mutation {
    register(
      firstName: String!,
      lastName: String,
      email: String,
      phone: String,
      password: String!,
      address: String
    ): String
  }
`;
