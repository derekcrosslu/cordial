import { authDecoder } from '@redwoodjs/auth-dbauth-api'
import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { getCurrentUser } from 'src/lib/auth'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const handler = createGraphQLHandler({
  authDecoder,
  getCurrentUser,
  loggerConfig: { logger, options: {} },
  directives,
  sdls,
  services,
   cors: {
    //  origin: 'https://7673b9d796ba.ngrok.app', 
     credentials: true,
 },
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
  formatError: (error) => {
console.log('process.env.NODE_ENV,,process.env.REDWOOD_ENV,process.env,process',process.env.NODE_ENV,process.env.REDWOOD_ENV,process.env);
    
    const originalError = error.originalError
    logger.error({ graphQL: error, originalError: originalError }, error.message)
    // return new Error('A much better but less revealing message') // possible use https://www.apollographql.com/docs/apollo-server/data/errors/#error-codes
    if (originalError instanceof ValidationError) {
      return new ValidationError('Validation failed.')
    } else if (originalError instanceof ForbiddenError) {
      return new ForbiddenError(originalError.message)
    } else if (originalError instanceof AuthenticationError) {
      return new AuthenticationError(originalError.message)
    } else {
      return new Error('An error occurred.')
    }
  },
})
