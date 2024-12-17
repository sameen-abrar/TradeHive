import { productResponse } from "./products.responseModel";

export const productTypeDefs = /* GraphQL */ `
  ${productResponse}
  scalar Date
  type Query {
    getAllProducts: [ProductListResponse]
    deleteProduct(productId: Int): Boolean
    getProduct(productId: Int): productResponseModel
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
    rentProduct(
      productId: Int!
      userId: Int!,
      fromDate: Date!,
      toDate: Date!
    ):Boolean
    buyProduct(
      productId: Int!
      userId: Int!
    ):Boolean
  }
`;
