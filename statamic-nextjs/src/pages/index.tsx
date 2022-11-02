import { FALLBACK_DESCRIPTION } from '@foundation/config/constants'
import { Header } from '@foundation/ui/components/04-habitats/Header'
import { TopBar } from '@foundation/ui/components/04-habitats/TopBar'
import { LayoutFrontpage } from '@project/Layouts'
import { gql, request } from 'graphql-request'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = any

const Home: NextPage<Props> = ({ nav, header, globalSet, entry }) => {
  const { asPath } = useRouter()

  return (
    <div>
      <Head>
        <title>{`${entry?.title} | ${globalSet?.site.name}`}</title>
        <meta name="description" content={entry?.description || FALLBACK_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar nav={nav} asPath={asPath} />

      <Header header={header} />

      <LayoutFrontpage content={entry} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const query = gql`
    {
      entry(uri: "/") {
        title
        blueprint
        collection {
          handle
        }
        ... on Entry_Pages_Frontpage {
          id
          description
          hero_body
          hero_image {
            url
            permalink
          }
          hero_title
          hero_link_title
          hero_link
          hero_usp_elements {
            icon {
              value
              label
            }
            text
          }
          replicator_content {
            __typename
            ... on Set_ReplicatorContent_ElementMTekstOgBillede {
              bodytext
              layout
              button_link
              button_text
              layout_direction {
                value
              }
              title
              image_pages {
                ... on Asset_Pages {
                  id
                  permalink
                  width
                  height
                  alt
                }
              }
              background_color {
                value
              }
            }
            ... on Set_ReplicatorContent_ElementWithTextAndIllustration {
              text
              layout
              layout_direction {
                value
              }
              title
              background {
                value
              }
              button_link
              button_text
              illustration {
                value
              }
            }
          }
        }
      }
      globalSet(handle: "seo") {
        site {
          name
          url
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
      nav(handle: "universes") {
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
    query
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
  }
}

export default Home
