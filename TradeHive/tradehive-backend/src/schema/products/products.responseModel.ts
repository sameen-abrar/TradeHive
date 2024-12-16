export const productResponse = /* GraphQL */ `
    type ProductListResponse {
    title: String!
    description: String!
    price: Float!
    rentPrice: Float!
    rentType: String
    categories: [String!]!
    createdAt: String!
  }
`;
