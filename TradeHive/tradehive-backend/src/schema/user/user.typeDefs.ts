export const authTypeDefs = /* GraphQL */ `
      type Query {
        login(username: String!, password: String!): Boolean
      }
      type Mutation{        
        register(username: String!, password: String!, name: String!, email: String ): String
      }
    `
