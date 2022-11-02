import { FALLBACK_DESCRIPTION } from '@foundation/config/constants'
import { Header } from '@foundation/ui/components/04-habitats/Header'
import { TopBar } from '@foundation/ui/components/04-habitats/TopBar'
import classNames from 'classnames'
import { gql, request } from 'graphql-request'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = any

const Home: NextPage<Props> = ({ globalSet, entry, topNav, header }) => {
  const { asPath } = useRouter()

  return (
    <div>
      <Head>
        <title>{`${entry?.title} | ${globalSet.site.name}`}</title>
        <meta name="description" content={entry?.description || FALLBACK_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar nav={topNav} asPath={asPath} />

      <Header header={header} />

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
        collection {
          handle
        }
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
      topNav: nav(handle: "universes") {
        title
        tree {
          page {
            title
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

  const headerQuery = gql`
    {
      header: nav(handle: "${response.entry?.collection.handle}") {
        title
        tree {
          page {
            title
            url
          }
          children {
            page {
              url
              title
            }
          }
        }
      }
    }
  `

  const header = await request(
    'https://www.headless-5cj5jmy-br3bvmw5mdtds.de-2.platformsh.site/graphql',
    headerQuery
  )

  return {
    props: {
      ...response,
      ...header,
    },
    revalidate: 60,
  }
}

export default Home
