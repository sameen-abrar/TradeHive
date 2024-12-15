export const productTypeDefs = /* GraphQL */ `      
      type Query{
        getProduct(productId: Int): Boolean
      },
      type Mutation{        
        addProduct(
            title: String, 
            description: String!, 
            price: Float, 
            rentPrice: Float!, 
            categoryIds: [Int!]! ): String
      }
    `;
