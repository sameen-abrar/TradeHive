import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
 
// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema})
 
// Pass it into a server to hook into request handlers.
const server = createServer(yoga)

export const prisma = new PrismaClient()

export const hash = bcrypt
 
// Start the server and you're done!
server.listen(8080, () => {
  console.info('Server is running on http://localhost:8080/graphql')
})