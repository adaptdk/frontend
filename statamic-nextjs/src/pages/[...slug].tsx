import classNames from 'classnames'
import { FALLBACK_DESCRIPTION } from 'config/constants'
import { gql, request } from 'graphql-request'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Header } from 'ui/components/04-habitats/Header'
import { TopBar } from 'ui/components/04-habitats/TopBar'

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

export const getStaticProps: GetStaticProps = async ({ params, preview, previewData }) => {
  let token

  if (typeof previewData === 'object' && 'token' in previewData) {
    token = (previewData as { token: string }).token
  }

  const { slug } = params ?? {}

  if (!slug) {
    return {
      notFound: true,
    }
  }

  const uri = typeof slug === 'string' ? slug : slug.join('/')

  const pageQuery = gql`
    {
      entry(uri: "/${uri}", filter: { status: { in: ["draft", "published"] } }) {
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

  const response = await request(`https://sd-statamic.test/graphql?token=${token}`, pageQuery)

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

  const header = await request('https://sd-statamic.test/graphql', headerQuery)

  return {
    props: {
      ...response,
      ...header,
    },
    revalidate: 60,
  }
}

export default Home
