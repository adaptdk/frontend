import Head from 'next/head'
import { request, gql, GraphQLClient } from 'graphql-request'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { FALLBACK_DESCRIPTION } from '@foundation/config/constants'

type Props = any

const Home: NextPage<Props> = ({ globalSet, entry }) => {
  return (
    <div>
      <Head>
        <title>{`${entry.title} | ${globalSet.site.name}`}</title>
        <meta name="description" content={entry.description || FALLBACK_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hej: {entry?.title}</h1>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params ?? {}

  if (!slug) {
    return {
      notFound: true,
    }
  }

  const uri = typeof slug === 'string' ? slug : slug.join('/')

  const pageQuery = gql`
    {
      entry(uri: "/${uri}") {
        title
        url
      }
      globalSet(handle: "seo") {
        site {
          name
        }
        ... on GlobalSet_Seo {
          site {
            locale
            name
            short_locale
            url
          }
        }
      }
    }
  `

  const response = await request(
    'https://www.headless-5cj5jmy-br3bvmw5mdtds.de-2.platformsh.site/graphql',
    pageQuery
  )

  return {
    props: {
      ...response,
    },
    revalidate: 60,
  }
}

export default Home
