import { GraphQLClient } from 'graphql-request'

import { getSdk } from './generated/generated-types'
import { GRAPHQL_URL } from './statamic-constants'

const createClient = (previewToken?: string) => {
  const url = `${GRAPHQL_URL}${previewToken ? `?token=${previewToken}` : ''}`

  return new GraphQLClient(url, {
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
  })
}

export const statamicClient = (previewToken?: string) => {
  const client = createClient(previewToken)
  return getSdk(client)
}
