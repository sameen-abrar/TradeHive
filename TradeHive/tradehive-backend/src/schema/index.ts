import { createSchema } from 'graphql-yoga'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { authTypeDefs } from './user/user.typeDefs';
import { authResolvers } from './user/user.resolvers';
import { productTypeDefs } from './products/products.typeDefs';
import { productResolvers } from './products/products.resolvers';

const typeDefs = mergeTypeDefs([authTypeDefs, productTypeDefs]);
const resolvers = mergeResolvers([authResolvers, productResolvers]);
 
export const schema = createSchema({
    typeDefs,
    resolvers
})