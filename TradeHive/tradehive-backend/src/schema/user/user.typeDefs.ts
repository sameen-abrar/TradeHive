export const authTypeDefs = /* GraphQL */ `
  type Query {
    login(email: String!, password: String!): Boolean
  }
  type Mutation {
    register(
      firstName: String,
      lastName: String!,
      email: String,
      phone: String!,
      password: String,
    ): String
  }
`;
