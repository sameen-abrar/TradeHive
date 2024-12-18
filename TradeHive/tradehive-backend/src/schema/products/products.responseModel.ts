export const productResponse = /* GraphQL */ `
  scalar Date
  type ProductListResponse {
    id: Int!
    title: String!
    description: String!
    price: Float!
    rentPrice: Float!
    rentType: String
    categories: [String!]!
    createdAt: Date!
  }
  type productResponseModel {
    id: Int!
    title: String!
    description: String!
    price: Int!
    rentPrice: String!
    rentType: String!
    categories: [String!]
    createdAt: Date!
    updatedAt: Date
  }
`;
