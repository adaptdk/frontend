import Head from 'next/head'
import { request, gql, GraphQLClient } from 'graphql-request'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

type Props = any

const Home: NextPage<Props> = ({ entry }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hej: {entry?.title}</h1>

        <p>...then we have access to Statamic!</p>
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
    }
  `

  const response = await request(
    'https://www.headless-5cj5jmy-br3bvmw5mdtds.de-2.platformsh.site/graphql',
    pageQuery
  )

  return {
    props: {
      entry: response.entry,
    },
    revalidate: 60,
  }
}

export default Home
