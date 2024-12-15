import { createSchema } from 'graphql-yoga'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { authTypeDefs } from './user/user.typeDefs';
import { authResolvers } from './user/user.resolvers';

const typeDefs = mergeTypeDefs([authTypeDefs]);
const resolvers = mergeResolvers([authResolvers]);
 
export const schema = createSchema({
    typeDefs,
    resolvers
})