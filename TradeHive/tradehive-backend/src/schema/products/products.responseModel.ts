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
  type productResponseModel {
  id: Int!
  title: String!
  description: String!
  price: Int!
  rentPrice: String!
  rentType: String! 
  categories: [String!]
  createdAt: Date
  updatedAt: Date
}
`;
