import { createSchema } from 'graphql-yoga'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { authTypeDefs } from './user/user.typeDefs';
import { authResolvers } from './user/user.resolvers';
import { productTypeDefs } from './products/products.typeDefs';
import { productResolvers } from './products/products.resolvers';
import { DateScalar } from '../shared/date.scalar';

const typeDefs = mergeTypeDefs([authTypeDefs, productTypeDefs]);
const resolvers = mergeResolvers([authResolvers, productResolvers]);

resolvers.Date = DateScalar;
 
export const schema = createSchema({
    typeDefs,
    resolvers
})