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

// // Handle graceful shutdown on process exit
// const shutdown = () => {
//   console.info('Closing server...');
//   server.close((err) => {
//     if (err) {
//       console.error('Error while closing server:', err);
//       process.exit(1);
//     }
//     console.info('Server closed successfully');
//     process.exit(0);
//   });
// };

// // Listen for termination signals
// process.on('SIGINT', shutdown); // Handle Ctrl+C
// process.on('SIGTERM', shutdown); // Handle termination signal (e.g., from Docker or cloud environment)