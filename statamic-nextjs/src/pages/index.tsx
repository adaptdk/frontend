import { Header } from '@foundation/ui/components/04-habitats/Header'
import { LayoutFrontpage } from '@project/Layouts/LayoutFrontpage'
import { gql, request } from 'graphql-request'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = any

const Home: NextPage<Props> = ({ nav, ...rest }) => {
  const { asPath } = useRouter()

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header nav={nav} asPath={asPath} />

      <LayoutFrontpage content={rest.entry} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const query = gql`
    {
      entry(uri: "/") {
        title
        blueprint
        ... on Entry_Pages_Frontpage {
          id
          hero_body
          hero_image {
            url
            permalink
          }
          hero_title
          hero_link_title
          hero_link
          replicator_content {
            ... on Set_ReplicatorContent_VideoPlayer {
              description
              large_video
            }
            ... on Set_ReplicatorContent_ElementWithTextAndTwoCards {
              title
              text
            }
            ... on Set_ReplicatorContent_ElementWithTextAndIllustration {
              text
              layout
            }
            ... on Set_ReplicatorContent_ElementMTekstOgBillede {
              bodytext
              layout
            }
            ... on Set_ReplicatorContent_NewsWidget {
              news_widget_title
              news_widget_elements {
                ... on Set_NewsWidgetElements_Nyhed {
                  hide_universe_tag
                }
              }
            }
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

  return {
    props: {
      ...response,
    },
  }
}

export default Home
