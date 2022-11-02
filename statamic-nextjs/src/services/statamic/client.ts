import { GraphQLClient } from 'graphql-request'

import { GRAPHQL_URL } from './constants'
import { getSdk } from './generated'

const client = new GraphQLClient(GRAPHQL_URL, {
  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
  },
})

export const statamicClient = getSdk(client)
