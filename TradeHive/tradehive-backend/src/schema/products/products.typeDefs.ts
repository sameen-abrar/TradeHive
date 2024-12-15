export const productTypeDefs = /* GraphQL */ `
  type Query {
    getProduct(productId: Int): Boolean
  }
  type Mutation {
    addProduct(
      title: String
      description: String!
      price: Float
      rentPrice: Float!
      rentType: String
      categoryIds: [Int!]!
    ): String
    updateProduct(
      productId: Int!
      title: String
      description: String
      price: Float
      rentPrice: Float
      rentType: String
    ): String
  }
`;
