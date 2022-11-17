import { GraphQLClient } from 'graphql-request'

import { getSdk } from './generated/generated-types'
import { GRAPHQL_URL } from './statamic-constants'

const client = new GraphQLClient(GRAPHQL_URL, {
  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
  },
})

export const statamicClient = getSdk(client)
